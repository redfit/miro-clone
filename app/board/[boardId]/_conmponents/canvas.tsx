"use client";

import Info from "@/app/board/[boardId]/_conmponents/info";
import Participants from "@/app/board/[boardId]/_conmponents/participants";
import Toolbar from "@/app/board/[boardId]/_conmponents/toolbar";

import { useSelf } from "@/liveblocks.config";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const info = useSelf((me) => me.info);

  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar />
    </main>
  );
};

export default Canvas;
