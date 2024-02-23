import { Loader } from 'lucide-react'
import { InformationSkeleton } from '../information'
import { ParticipantsSkeleton } from '../participants'
import { ToolbarSkeleton } from '../toolbar'

const CanvasLoading = () => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
      <InformationSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  )
}

export default CanvasLoading
