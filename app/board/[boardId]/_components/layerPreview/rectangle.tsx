import { RectangleLayer } from '@/types/canvas'

interface RectangleProps {
  id: string
  layer: RectangleLayer
  onPointDown: (e: React.PointerEvent, id: string) => void
  selectionColor?: string
}

const Rectangle = ({ id, layer, onPointDown, selectionColor }: RectangleProps) => {
  const { x, y, width, height, fill } = layer

  return (
    <rect
      className="drop-shadow-md"
      onPointerDown={(e) => onPointDown(e, id)}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      x={0}
      y={0}
      width={width}
      height={height}
      strokeWidth={1}
      fill="#000"
      stroke="transparent"
    />
  )
}

export default Rectangle
