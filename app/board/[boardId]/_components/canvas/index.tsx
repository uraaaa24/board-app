'use client'

import { useCallback, useState } from 'react'

import { useCanRedo, useCanUndo, useHistory, useMutation } from '@/liveblocks.config'
import { Camera, CanvasMode, CanvasState } from '@/types/canvas'

import { pointerEventToCanvasPoint } from '@/utils'
import CursorsPresence from '../cursorsPresence'
import { Information } from '../information'
import { Participants } from '../participants'
import { Toolbar } from '../toolbar'

interface CanvasProps {
  boardId: string
}

const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None
  })
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 })

  const history = useHistory()
  const canUndo = useCanUndo()
  const canRedo = useCanRedo()

  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY
    }))
  }, [])

  const onPointerMove = useMutation(({ setMyPresence }, e: React.PointerEvent) => {
    e.preventDefault()

    const current = pointerEventToCanvasPoint(e, camera)
    setMyPresence({ cursor: current })
  }, [])

  const onPointerLeave = useMutation(({ setMyPresence }) => {
    setMyPresence({ cursor: null })
  }, [])

  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Information boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        redo={history.redo}
        undo={history.undo}
      />
      <svg className="h-[100vh] w-[100vh]" onWheel={onWheel} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
        <g>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  )
}

export default Canvas
