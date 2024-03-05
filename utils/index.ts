import { COLORS } from '@/constants/color'
import { Camera, Color } from '@/types/canvas'

/**
 * Select a color from the COLORS array
 */
export function randomSelectColor(num: number): string {
  return COLORS[num % COLORS.length]
}

/**
 * Convert a pointer event to a point on the canvas
 */
export function pointerEventToCanvasPoint(e: React.PointerEvent, camera: Camera) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y
  }
}

/**
 * Convert a color to a CSS string
 */
export function colorToCss(color: Color) {
  return `#${color.r.toString(16).padStart(2, '0')}${color.g.toString(16).padStart(2, '0')}${color.b
    .toString(16)
    .padStart(2, '0')}`
}
