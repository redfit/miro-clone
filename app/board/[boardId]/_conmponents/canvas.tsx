"use client";

import Info from "@/app/board/[boardId]/_conmponents/info";
import Participants from "@/app/board/[boardId]/_conmponents/participants";
import Toolbar from "@/app/board/[boardId]/_conmponents/toolbar";

import { CanvasMode, CanvasState } from "@/types/canvas";

import {
  useCanRedo,
  useHistory,
  useCanUndo,
  useSelf,
} from "@/liveblocks.config";
import { useState } from "react";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });
  const info = useSelf((me) => me.info);
  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canUndo={canUndo}
        canRedo={canRedo}
        undo={history.undo}
        redo={history.redo}
      />
    </main>
  );
};

export default Canvas;
