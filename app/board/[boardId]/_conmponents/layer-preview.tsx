"use client";

import { memo } from "react";
import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/types/canvas";
import { Rectangle } from "@/app/board/[boardId]/_conmponents/rectangle";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor: string;
}

const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) {
      return null;
    }

    switch (layer.type) {
      case LayerType.Rectangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      default:
        console.log("Unknown layer type");
        return null;
    }

    return (
      <>
        <div>LayerPreview</div>
      </>
    );
  },
);

export default LayerPreview;
