'use client'

import { useOrganization } from '@clerk/nextjs'
import BoardList from './_components/boardList'
import EmptyOrganization from './_components/emptyOrganization'

interface DashboardPageProps {
  searchParams: {
    search?: string
    favorites?: string
  }
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization()

  return (
    <div className="flex-1 h-[calc(100%-80px)]">
      {!organization ? <EmptyOrganization /> : <BoardList organizationId={organization.id} query={searchParams} />}
    </div>
  )
}

export default DashboardPage
