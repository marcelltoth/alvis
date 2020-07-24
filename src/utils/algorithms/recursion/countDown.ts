export function* countDown(fromNumber: number): any {
  if (fromNumber <= 0) {
    return fromNumber
  }
  yield fromNumber
  yield* countDown(fromNumber - 1)
}

export function* fib(n: number, current: number = 0, next: number = 1): any {
  if (n === 0) {
    return 0
  }
  yield current
  yield* fib(n - 1, next, current + next)
}

// function* take(num: number, iter: { next: () => any }) {
//   let item = iter.next()
//   for (let index = 0; index < num && !item.done; index++) {
//     yield item.value
//     item = iter.next()
//   }
// }
