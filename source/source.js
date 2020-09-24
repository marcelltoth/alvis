function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function* bubbleSort({ data }) {
  let arr = data;
  for (let i = arr.length; i >= 2; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
    yield arr;
  }
  return arr;
}

exports.default = bubbleSort;
