import { Loader } from "lucide-react";
import { InfoSkeleton } from "@/app/board/[boardId]/_conmponents/info";
import { ParticipantsSkeleton } from "@/app/board/[boardId]/_conmponents/participants";
import { ToolbarSkeleton } from "@/app/board/[boardId]/_conmponents/toolbar";

const Loading = () => {
  return (
    <>
      <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
        <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
        <InfoSkeleton />
        <ParticipantsSkeleton />
        <ToolbarSkeleton />
      </main>
    </>
  );
};

export default Loading;
