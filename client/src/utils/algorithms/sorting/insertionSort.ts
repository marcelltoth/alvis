import { swap } from '../../arrayElementSwap'
import { SortingArguments } from './sorting.types'

export function* insertionSort({ data }: SortingArguments) {
  let arr = data
  let temp, inner
  for (let i = 1; i <= arr.length - 1; ++i) {
    temp = arr[i]
    inner = i
    while (inner > 0 && arr[inner - 1] >= temp) {
      arr[inner] = arr[inner - 1]
      --inner
    }
    arr[inner] = temp
    yield arr
  }
  return arr
}
