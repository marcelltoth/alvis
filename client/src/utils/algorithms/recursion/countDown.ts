export function* countDown(fromNumber: number): any {
  if (fromNumber <= 0) {
    return fromNumber
  }
  yield fromNumber
  yield* countDown(fromNumber - 1)
}

// function* take(num: number, iter: { next: () => any }) {
//   let item = iter.next()
//   for (let index = 0; index < num && !item.done; index++) {
//     yield item.value
//     item = iter.next()
//   }
// }
