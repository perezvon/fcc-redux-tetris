export const blockTypes = [
  [[0,0,1],[1,1,1]],
  [[1,0,0],[1,1,1]],
  [[1,1,0],[0,1,1]],
  [[0,1,1],[1,1,0]],
  [[1,1,1,1]],
  [[0,1,0],[1,1,1]],
  [[1,1],[1,1]]
]

export const randomBlock = () => {
  return blockTypes[Math.floor(Math.random() * blockTypes.length)]
}