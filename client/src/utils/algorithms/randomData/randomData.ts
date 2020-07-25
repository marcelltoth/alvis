export class CArray {
  dataStore: any[]
  pos: number
  numElements: any

  constructor({
    numElements = 0,
    dataStore = [],
    pos = 0,
  }: {
    numElements?: number
    dataStore?: any[]
    pos?: number
  }) {
    this.dataStore = dataStore
    this.pos = pos
    this.numElements = numElements || this.numElements
    for (var i = 0; i < numElements; ++i) {
      this.dataStore[i] = i
    }
  }

  setData() {
    for (var i = 0; i < this?.numElements; ++i) {
      this.dataStore[i] = Math.floor(Math.random() * (this?.numElements + 1))
    }
  }

  clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
      this.dataStore[i] = 0
    }
  }

  insert(element: any) {
    this.dataStore[this.pos++] = element
  }
}

// function toString() {
//   var retstr = ''
//   for (var i = 0; i < this.dataStore.length; ++i) {
//     retstr += this.dataStore[i] + ' '
//     if (i > 0 && i % 10 == 0) {
//       retstr += '\n'
//     }
//   }
//   return retstr
// }
