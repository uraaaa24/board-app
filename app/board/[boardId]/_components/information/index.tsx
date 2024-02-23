'use client'

import { useQuery } from 'convex/react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import DropdownMenuActions from '@/components/common/menu/dropdownMenuActions'
import Hint from '@/components/common/tooltips/hint'
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { cn } from '@/lib/utils'
import { useRenameModal } from '@/store/useRenameModal'
import { Menu } from 'lucide-react'
import TabSeparator from './tabSeparator'

interface InformationProps {
  boardId: string
}

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

export const Information = ({ boardId }: InformationProps) => {
  const { onOpen } = useRenameModal()

  const data = useQuery(api.board.get, {
    id: boardId as Id<'boards'>
  })

  if (!data) return <InformationSkeleton />

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Button asChild variant="board" className="px-2">
          <Link href="/">
            <Image src="/logo.svg" alt="Board logo" height={40} width={40} />
            <span className={cn('font-semibold text-xl ml-2 text-black', font.className)}>Board</span>
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Hint label="Edit title" side="bottom" sideOffset={10}>
        <Button variant="board" onClick={() => onOpen(data._id, data.title)} className="text-base font-normal px-2">
          {data.title}
        </Button>
      </Hint>
      <TabSeparator />
      <DropdownMenuActions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Main menu" side="bottom" sideOffset={10}>
            <Button size="icon" variant="board">
              <Menu />
            </Button>
          </Hint>
        </div>
      </DropdownMenuActions>
    </div>
  )
}

export const InformationSkeleton = () => {
  return <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
}
