export function swap<T = any>(arr: T[], index1: number, index2: number) {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}
