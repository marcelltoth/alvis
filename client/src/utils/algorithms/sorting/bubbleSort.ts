import { swap } from '../../arrayElementSwap'

type BubbleSort = {
  data: ({ value: number } & { [key in string]: any })[]
}

export function* bubbleSort({ data }: BubbleSort) {
  let arr = data
  for (let i = arr.length; i >= 2; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j]?.value > arr[j + 1]?.value) {
        swap(arr, j, j + 1)
      }
    }
    yield arr
  }
  return arr
}
