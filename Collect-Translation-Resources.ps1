$ErrorActionPreference = 'Stop'

$root = Join-Path $env:APPDATA '.minecraft\versions\Sborka'
$desktop = [Environment]::GetFolderPath('Desktop')
$output = Join-Path $desktop 'Sborka-Translation-Source.zip'
$stage = Join-Path $env:TEMP ('Sborka-Translation-' + [guid]::NewGuid().ToString('N'))

$folders = @(
    'kubejs', 'config', 'defaultconfigs', 'configureddefaults',
    'resourcepacks', 'datapacks', 'patchouli_books', 'fancymenu_data',
    'ESM', 'moddata', 'moonlight-global-datapacks', 'ftbteambases'
)
$extensions = @(
    '.json', '.json5', '.jsonc', '.js', '.zs', '.ts', '.properties',
    '.lang', '.txt', '.toml', '.cfg', '.conf', '.yml', '.yaml',
    '.snbt', '.xml', '.mcmeta', '.ftl', '.po', '.pot', '.md',
    '.html', '.css', '.ini'
)

if (-not (Test-Path -LiteralPath $root)) {
    throw "Sborka folder not found: $root"
}

New-Item -ItemType Directory -Path $stage -Force | Out-Null
$script:fileCount = 0
$script:totalBytes = 0

function Copy-TextFile {
    param([string]$Source, [string]$RelativePath)

    try {
        $info = Get-Item -LiteralPath $Source -ErrorAction Stop
        if ($info.Length -gt 5MB) { return }

        $target = Join-Path $stage $RelativePath
        New-Item -ItemType Directory -Path (Split-Path -Parent $target) -Force | Out-Null
        Copy-Item -LiteralPath $Source -Destination $target -Force
        $script:fileCount++
        $script:totalBytes += $info.Length
    } catch {
        Write-Warning "Skipped file: $Source"
    }
}

try {
    Add-Type -AssemblyName System.IO.Compression
    Add-Type -AssemblyName System.IO.Compression.FileSystem

    foreach ($folder in $folders) {
        $dir = Join-Path $root $folder
        if (-not (Test-Path -LiteralPath $dir)) { continue }

        Get-ChildItem -LiteralPath $dir -File -Recurse -ErrorAction SilentlyContinue |
            Where-Object {
                $extensions -contains $_.Extension.ToLowerInvariant() -and
                $_.Length -le 5MB -and
                $_.FullName -notmatch '[\\/](cache|logs|node_modules)[\\/]'
            } |
            ForEach-Object {
                $relative = $_.FullName.Substring($root.Length).TrimStart('\','/')
                Copy-TextFile -Source $_.FullName -RelativePath $relative
            }
    }

    $archiveFiles = @()
    $modsDir = Join-Path $root 'mods'
    if (Test-Path -LiteralPath $modsDir) {
        $archiveFiles += Get-ChildItem -LiteralPath $modsDir -Filter '*.jar' -File -ErrorAction SilentlyContinue
    }
    $packsDir = Join-Path $root 'resourcepacks'
    if (Test-Path -LiteralPath $packsDir) {
        $archiveFiles += Get-ChildItem -LiteralPath $packsDir -File -ErrorAction SilentlyContinue |
            Where-Object { $_.Extension -in @('.zip', '.jar') }
    }

    foreach ($archive in $archiveFiles) {
        $zip = $null
        try {
            $zip = [System.IO.Compression.ZipFile]::OpenRead($archive.FullName)
            foreach ($entry in $zip.Entries) {
                $name = $entry.FullName.Replace('\','/')
                $ext = [IO.Path]::GetExtension($name).ToLowerInvariant()
                $isLanguage = ($name -match '(^|/)assets/[^/]+/lang/[^/]+\.(json|lang|properties)$')
                $isBook = ($name -match '(^|/)patchouli_books/.*\.(json|snbt|txt)$')
                if (-not ($isLanguage -or $isBook)) { continue }
                if ($entry.Length -eq 0 -or $entry.Length -gt 5MB) { continue }

                $relative = 'archives\' + $archive.BaseName + '\' + $name
                $destination = Join-Path $stage $relative
                New-Item -ItemType Directory -Path (Split-Path -Parent $destination) -Force | Out-Null

                $inputStream = $entry.Open()
                $outputStream = [IO.File]::Create($destination)
                try {
                    $inputStream.CopyTo($outputStream)
                } finally {
                    $outputStream.Dispose()
                    $inputStream.Dispose()
                }
                $script:fileCount++
                $script:totalBytes += $entry.Length
            }
        } catch {
            Write-Warning "Could not read archive: $($archive.Name)"
        } finally {
            if ($null -ne $zip) { $zip.Dispose() }
        }
    }

    if ($script:fileCount -eq 0) {
        throw 'No matching text files were found. No archive was created.'
    }

    if (Test-Path -LiteralPath $output) {
        Remove-Item -LiteralPath $output -Force
    }
    Compress-Archive -Path (Join-Path $stage '*') -DestinationPath $output -CompressionLevel Optimal

    Write-Host ''
    Write-Host 'COLLECTION COMPLETE' -ForegroundColor Green
    Write-Host "Files collected: $script:fileCount"
    Write-Host ('Source text size: {0:N1} MB' -f ($script:totalBytes / 1MB))
    Write-Host "Output archive: $output"
    Write-Host 'The game files and saves were not modified.'
    Invoke-Item $desktop
} catch {
    Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
} finally {
    if (Test-Path -LiteralPath $stage) {
        Remove-Item -LiteralPath $stage -Recurse -Force -ErrorAction SilentlyContinue
    }
}
Read-Host 'Press Enter to exit'
