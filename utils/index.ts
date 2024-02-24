import { COLORS } from '@/constants/color'
import { Camera } from '@/types/canvas'

export function randomSelectColor(num: number): string {
  return COLORS[num % COLORS.length]
}

export function pointerEventToCanvasPoint(e: React.PointerEvent, camera: Camera) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y
  }
}
