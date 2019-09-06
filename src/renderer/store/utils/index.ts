import Vuex from 'vuex'
import { BindingHelper } from 'vuex-class/lib/bindings'

export function keymirror<T>(obj: T): { [k in keyof T]: string } {
  let map: { [key: string]: string } = {}
  let key

  for (key in obj) {
    if ((obj as Object).hasOwnProperty(key)) {
      map[key] = key
    }
  }
  return map as { [k in keyof T]: string }
}

export function decorator<D extends BindingHelper, T>(helper: D, keyMap: T) {
  type KeyType = keyof T

  type Decorator = (target: any, key: string) => any

  function decoratorWraper(originKey?: KeyType): Decorator
  function decoratorWraper(target: any, key?: KeyType): void

  function decoratorWraper(a: any | KeyType, b?: KeyType): Decorator | void {
    if (typeof b === 'string') {
      const target = a
      const key = b
      return helper(target, key)
    }
    const originKey = a
    return helper(originKey)
  }

  return decoratorWraper
}
