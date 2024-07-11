"use client";

import { Expression, ExpressionOrValue } from "convex/server";
import { EmptySearch } from "@/app/(dashboard)/_components/empty-search";
import { EmptyFavorites } from "@/app/(dashboard)/_components/empty-favorites";
import { EmptyBoards } from "@/app/(dashboard)/_components/empty-boards";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];

  if (!data?.length && query?.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query?.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }
  return <div className="lx">{JSON.stringify(query)}.</div>;
};
