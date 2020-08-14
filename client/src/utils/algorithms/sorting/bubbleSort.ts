import { swap } from '../../arrayElementSwap'
import { SortingArguments } from './sorting.types'

export function* bubbleSort({ data }: SortingArguments) {
  let arr = data
  for (let i = arr.length; i >= 2; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j]?.value > arr[j + 1]?.value) {
        swap(arr, j, j + 1)
      }
    }
    yield arr
  }
  return arr
}
