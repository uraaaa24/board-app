'use client'

import { useOther } from '@/liveblocks.config'
import { randomSelectColor } from '@/utils'
import { MousePointer2 } from 'lucide-react'
import { memo } from 'react'

interface CursorProps {
  connectionId: number
}

// eslint-disable-next-line react/display-name
const Cursor = memo(({ connectionId }: CursorProps) => {
  const info = useOther(connectionId, (user) => user?.info)
  const cursor = useOther(connectionId, (user) => user?.presence.cursor)

  const name = info?.name || 'Teammate'

  if (!cursor) return null

  const { x, y } = cursor

  return (
    <foreignObject
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`
      }}
      height={50}
      width={50}
      className="relative drop-shadow-md"
    >
      <MousePointer2
        className="h-5 w-5"
        style={{
          fill: randomSelectColor(connectionId),
          color: randomSelectColor(connectionId)
        }}
      />
    </foreignObject>
  )
})

export default Cursor
