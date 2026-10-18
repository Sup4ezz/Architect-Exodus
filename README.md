# Architect-Exodus — translation workbench

This repository is for preparing a Russian translation of the user's existing installed Minecraft instance.

## Collect text resources from the installed instance

1. Open [Collect-Translation-Resources.ps1](./Collect-Translation-Resources.ps1).
2. Click **Raw** and save it to the Desktop as `Collect-Translation-Resources.ps1`.
3. Open PowerShell and run:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
& "$env:USERPROFILE\Desktop\Collect-Translation-Resources.ps1"
```

The script expects the instance at `%APPDATA%\.minecraft\versions\Sborka`. It creates `Sborka-Translation-Source.zip` on the Desktop. It only reads text-like files and language entries inside mod/resource-pack archives; it does not modify the instance or the `saves` directory.

The collection is a source bundle, not a finished translation. Some text may be stored in formats this script does not extract.
