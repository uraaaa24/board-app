import { Loader } from 'lucide-react'
import Information from '../information'
import Participants from '../participants.tsx'
import Toolbar from '../toolbar'

const CanvasLoading = () => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
      <Information.Skeleton />
      <Participants.Skeleton />
      <Toolbar.Skeleton />
    </main>
  )
}

export default CanvasLoading
