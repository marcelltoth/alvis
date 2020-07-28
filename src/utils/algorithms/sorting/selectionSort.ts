import { swap } from '../../arrayElementSwap'

type SelectionSort = {
  data: ({ value: number } & { [key in string]: any })[]
}

export function* selectionSort({ data }: SelectionSort) {
  let min,
    arr = data
  for (let outer = 0; outer < arr.length - 1; outer++) {
    min = outer
    for (let inner = outer + 1; inner < arr.length; inner++) {
      if (arr[inner].value < arr[min].value) {
        min = inner
      }
    }
    swap(arr, outer, min)
    yield arr
  }
  return arr
}
