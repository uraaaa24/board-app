'use client'

import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import BoardCard from '../boardCard'
import EmptyBoards from '../emptyBoards'
import EmptyFavorites from '../emptyFavorites'
import EmptySearch from '../emptySearch'
import NewBoardButton from '../newBoardButton'

interface BoardListProps {
  organizationId: string
  query: {
    search?: string
    favorites?: string
  }
}

const BoardList = ({ organizationId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { organizationId })

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">{query.favorites ? 'Favorite boards' : 'Team boards'}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton organizationId={organizationId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    )
  }

  if (!data?.length && query.search) {
    return <EmptySearch />
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />
  }

  if (!data?.length) {
    return <EmptyBoards />
  }

  return (
    <div>
      <h2 className="text-3xl">{query.favorites ? 'Favorite boards' : 'Team boards'}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton organizationId={organizationId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorizationId={board.authorizationId}
            authorizationName={board.authorizationName}
            createdAt={board._creationTime}
            organizationId={board.organizationId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  )
}

export default BoardList
