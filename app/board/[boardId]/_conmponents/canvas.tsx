"use client";

import Info from "@/app/board/[boardId]/_conmponents/info";
import Participants from "@/app/board/[boardId]/_conmponents/participants";
import Toolbar from "@/app/board/[boardId]/_conmponents/toolbar";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
};

export default Canvas;
