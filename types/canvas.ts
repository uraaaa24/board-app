export enum CanvasMode {
  None,
  Pressing,
  SelectionNet,
  Translating,
  Inserting,
  Resizing,
  Pencil
}

export enum LayerType {
  RectAngle,
  Ellipse,
  Path,
  Text,
  Note
}

export type Color = {
  r: number
  g: number
  b: number
}

export type Camera = {
  x: number
  y: number
}

export type CanvasState =
  | { mode: CanvasMode.None }
  | { mode: CanvasMode.Pressing; origin: Point }
  | { mode: CanvasMode.SelectionNet; origin: Point; current?: Point }
  | { mode: CanvasMode.Translating; current: Point }
  | { mode: CanvasMode.Inserting; layerType: LayerType.Ellipse | LayerType.RectAngle | LayerType.Text | LayerType.Note }
  | { mode: CanvasMode.Resizing; initialBounds: XYWH; corner: Side }
  | { mode: CanvasMode.Pencil }

export type RectAngleLayer = {
  type: LayerType.RectAngle
  x: number
  y: number
  height: number
  width: number
  fill: Color
  value?: string
}

export type EllipseLayer = {
  type: LayerType.Ellipse
  x: number
  y: number
  height: number
  width: number
  fill: Color
  value?: string
}

export type PathLayer = {
  type: LayerType.Path
  x: number
  y: number
  height: number
  width: number
  fill: Color
  points: number[][]
  value?: string
}

export type TextLayer = {
  type: LayerType.Text
  x: number
  y: number
  height: number
  width: number
  fill: Color
  value?: string
}

export type NoteLayer = {
  type: LayerType.Note
  x: number
  y: number
  height: number
  width: number
  fill: Color
  value?: string
}

export type Point = {
  x: number
  y: number
}

export type XYWH = {
  x: number
  y: number
  width: number
  height: number
}

export enum Side {
  Top = 1,
  Bottom = 2,
  Left = 4,
  Right = 8
}
