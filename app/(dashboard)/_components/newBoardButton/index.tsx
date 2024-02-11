'use client'

import { api } from '@/convex/_generated/api'
import useApiMutation from '@/hooks/useApiMutaion'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { toast } from 'sonner'

interface NewBoardButtonProps {
  organizationId: string
  disabled?: boolean
}

const NewBoardButton = ({ organizationId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create)

  const onClick = () => {
    mutate({
      title: 'Untitled',
      organizationId
    })
      .then(() => {
        toast.success('Board created!')
        // TODO: Redirect to /board/{id}
      })
      .catch(() => {
        toast.error('Failed to create board')
      })
  }

  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        'col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center transition',
        (pending || disabled) && 'opacity-75 hover:bg-blue-600 cursor-not-allowed'
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">New Board</p>
    </button>
  )
}

export default NewBoardButton
