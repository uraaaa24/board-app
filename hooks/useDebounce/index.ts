import { useEffect, useState } from 'react'

/**
 * テキストの入力が終わってから処理が実行されるようにするカスタムフック
 * @param value 更新するstate
 * @param delay 何秒間の猶予を持たせるか
 */
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
export default useDebounce
