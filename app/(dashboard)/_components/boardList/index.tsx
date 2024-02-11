'use client'

import EmptyBoards from '../emptyBoards'
import EmptyFavorites from '../emptyFavorites'
import EmptySearch from '../emptySearch'

interface BoardListProps {
  organizationId: string
  query: {
    search?: string
    favorites?: string
  }
}

const BoardList = ({ organizationId, query }: BoardListProps) => {
  // TODO: Change to API call
  const data = []

  if (!data?.length && query.search) {
    return <EmptySearch />
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />
  }

  if (!data?.length) {
    return <EmptyBoards />
  }

  return <div>{JSON.stringify(query)}</div>
}

export default BoardList
