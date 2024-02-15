'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useRenameModal } from '@/store/useRenameModal'

const RenameModal = () => {
  const { initialValues, isOpen, onClose } = useRenameModal()

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit board title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a new title for this board</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default RenameModal
