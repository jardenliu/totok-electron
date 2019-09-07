import {
  Getter,
  GetterTree,
  Mutation,
  MutationTree,
  Action,
  ActionTree
} from 'vuex/types/index'
import { BindingHelper } from 'vuex-class/lib/bindings'

type RootState = {
  [key: string]: any
}

export function getter<S, T extends GetterTree<S, RootState>>(
  state: S,
  getters: T
): { [K in keyof T]: Getter<S, RootState> } {
  return getters
}

export function mutation<S, T extends MutationTree<S>>(
  state: S,
  mutations: T
): { [K in keyof T]: Mutation<S> } {
  return mutations
}

export function action<S, T extends ActionTree<S, RootState>>(
  state: S,
  actions: T
): { [K in keyof T]: Action<S, RootState> } {
  return actions
}

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
