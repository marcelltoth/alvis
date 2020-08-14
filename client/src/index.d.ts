import { Dictionary } from 'lodash'

declare global {
  interface ObjectConstructor {
    typedKeys<T = Dictionary<any>>(o: T): Array<keyof T>
  }
}
