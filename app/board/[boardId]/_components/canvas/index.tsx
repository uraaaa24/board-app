'use client'

import { useSelf } from '@/liveblocks.config'
import Information from '../information'
import Participants from '../participants.tsx'
import Toolbar from '../toolbar'

interface CanvasProps {
  boardId: string
}

const Canvas = ({ boardId }: CanvasProps) => {
  const info = useSelf((me) => me.info)

  console.log(info)

  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Information />
      <Participants />
      <Toolbar />
    </main>
  )
}

export default Canvas
