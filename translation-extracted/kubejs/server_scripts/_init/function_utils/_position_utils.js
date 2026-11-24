// priority: 99951

const PositionUtilsKJS = {
  Quantize: function (blockPos) {
    let x = Minecraft$QuartPos.toBlock(Minecraft$QuartPos.fromBlock(blockPos.getX()))
    let y = Minecraft$QuartPos.toBlock(Minecraft$QuartPos.fromBlock(blockPos.getY()))
    let z = Minecraft$QuartPos.toBlock(Minecraft$QuartPos.fromBlock(blockPos.getZ()))
    return new BlockPos(x, y, z)
  }
}
