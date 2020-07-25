export function* fibonacci(
  n: number,
  current: number = 0,
  next: number = 1
): Generator<number, number | undefined, number | undefined> {
  if (n === 0) {
    return 0
  }
  yield current
  yield* fibonacci(n - 1, next, current + next)
}
