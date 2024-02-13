import { useAuth } from '@clerk/nextjs'
import { formatDistanceToNow } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

import DropdownMenuActions from '@/components/common/DropdownMenuActions'
import { Skeleton } from '@/components/ui/skeleton'
import { MoreHorizontal } from 'lucide-react'
import Footer from './footer'
import Overlay from './overlay'

interface BoardCardProps {
  id: string
  title: string
  authorizationName: string
  authorizationId: string
  createdAt: number
  imageUrl: string
  organizationId: string
  isFavorite: boolean
}

const BoardCard = ({
  id,
  title,
  authorizationName,
  authorizationId,
  createdAt,
  imageUrl,
  organizationId,
  isFavorite
}: BoardCardProps) => {
  const { userId } = useAuth()

  const authorLabel = userId === authorizationId ? 'You' : authorizationName
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true
  })

  return (
    <Link href={`board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
          <DropdownMenuActions id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </DropdownMenuActions>
        </div>
        <Footer
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          isFavorite={isFavorite}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  )
}

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  )
}

export default BoardCard
