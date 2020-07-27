type IterateGenerator = {
  iter: Generator<any, any, unknown>
  process: (value: any) => any
}

export const iterateGenerator = ({ iter, process }: IterateGenerator) => {
  var curr = iter.next()
  while (!curr.done) {
    process(curr.value)
    curr = iter.next()
  }
}
