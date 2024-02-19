'use client'

import Information from '../information'
import Participants from '../participants.tsx'
import Toolbar from '../toolbar'

interface CanvasProps {
  boardId: string
}

const Canvas = ({ boardId }: CanvasProps) => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Information />
      <Participants />
      <Toolbar />
    </main>
  )
}

export default Canvas
