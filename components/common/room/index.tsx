'use client'

import { RoomProvider } from '@/liveblocks.config'
import { ClientSideSuspense } from '@liveblocks/react'
import { ReactNode } from 'react'

interface RoomProps {
  children: ReactNode
  roomId: string
}

const Room = ({ children, roomId }: RoomProps) => {
  return (
    <RoomProvider id={roomId} initialPresence={{}}>
      <ClientSideSuspense fallback={<div>Loading...</div>}>{() => children}</ClientSideSuspense>
    </RoomProvider>
  )
}

export default Room
