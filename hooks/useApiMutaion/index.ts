import { useMutation } from 'convex/react'
import { useState } from 'react'

/**
 * ミューテーションの成功・失敗に応じて適切な処理を行うカスタムフック
 */
const useApiMutation = (mutationFunction: any) => {
  const [pending, setPending] = useState(false)
  const apiMutation = useMutation(mutationFunction)

  const mutate = (payload: any) => {
    setPending(true)

    return apiMutation(payload)
      .then((result) => {
        return result
      })
      .catch((error) => {
        throw error
      })
      .finally(() => setPending(false))
  }

  return {
    mutate,
    pending
  }
}

export default useApiMutation
