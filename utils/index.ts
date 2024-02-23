import { COLORS } from '@/constants/color'

export function randomSelectColor(num: number): string {
  return COLORS[num % COLORS.length]
}
