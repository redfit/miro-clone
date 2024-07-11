import Image from "next/image";
import { api } from "@/convex/_generated/api";

import { Button } from "@/components/ui/button";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutations } from "@/use-api-mutations";
import { toast } from "sonner";

export const EmptyBoards = () => {
  const { mutate, pending } = useApiMutations(api.board.create);
  const { organization } = useOrganization();

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Created board");
      })
      .catch(() => toast.error("Error creating board"));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image height={140} width={140} alt="Empty Search" src="/elements.svg" />
      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};
