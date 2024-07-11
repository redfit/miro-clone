import Image from "next/image";

export const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image height={140} width={140} alt="Empty Search" src="/elements.svg" />
      <h2 className="text-2xl font-semibold mt-6">No favorites found!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try favorites a board
      </p>
    </div>
  );
};