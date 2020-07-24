export function* fib(n: number, current: number = 0, next: number = 1): any {
  if (n === 0) {
    return 0
  }
  yield current
  yield* fib(n - 1, next, current + next)
}
