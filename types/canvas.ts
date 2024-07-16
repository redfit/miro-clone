export type Color = {
  r: number;
  g: number;
  b: number;
};

export type Camera = {
  x: number;
  y: number;
};

export enum LayerType {
  Rectangle,
  Ellipse,
  Path,
  Text,
  Note,
}

export type BaseLayer = {
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
};

export type RectangleLayer = BaseLayer & {
  type: LayerType.Rectangle;
};

export type EllipseLayer = BaseLayer & {
  type: LayerType.Ellipse;
};

export type PathLayer = BaseLayer & {
  type: LayerType.Path;
  points: number[][];
};

export type TextLayer = BaseLayer & {
  type: LayerType.Text;
};

export type NoteLayer = BaseLayer & {
  type: LayerType.Note;
};

export type Point = {
  x: number;
  y: number;
};

export type XYWH = Point & {
  height: number;
  width: number;
};

export enum Side {
  Top,
  Bottom,
  Left,
  Right,
}

export type CanvasState =
  | {
      mode: CanvasMode.None;
    }
  | {
      mode: CanvasMode.SelectionNet;
      origin: Point;
      current?: Point;
    }
  | {
      mode: CanvasMode.Translating;
      current: Point;
    }
  | {
      mode: CanvasMode.Inserting;
      layerType:
        | LayerType.Ellipse
        | LayerType.Rectangle
        | LayerType.Text
        | LayerType.Note;
    }
  | {
      mode: CanvasMode.Pencil;
    }
  | {
      mode: CanvasMode.Pressing;
      origin: Point;
    }
  | {
      mode: CanvasMode.Resizing;
      initialBounds: XYWH;
      corner: Side;
    };

export enum CanvasMode {
  None,
  Pressing,
  SelectionNet,
  Translating,
  Inserting,
  Resizing,
  Pencil,
  Note,
}

export type Layer =
  | RectangleLayer
  | EllipseLayer
  | PathLayer
  | TextLayer
  | NoteLayer;
