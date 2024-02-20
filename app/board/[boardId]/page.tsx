import Room from '@/components/common/room'
import Canvas from './_components/canvas'
import CanvasLoading from './_components/canvasLoading'

interface BoardIdPageProps {
  params: {
    boardId: string
  }
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <Room roomId={params.boardId} fallback={<CanvasLoading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  )
}

export default BoardIdPage
