import { useCallback } from 'react'

/**
 * USE COMPUTED HOOK
 * @param filter
 * @param deps
 * @returns
 */
const useComputed = <T, U>(filter: () => T, deps: Array<U> = []) => {
  return useCallback(() => {
    return filter()
  }, [...deps])() //eslint-disable-line
}

export default useComputed
