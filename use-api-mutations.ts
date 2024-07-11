import { useMutation } from "convex/react";
import { useState } from "react";

export const useApiMutations = (mutationFunction: any) => {
  const [pending, setPending] = useState(false);
  const apiMutations = useMutation(mutationFunction);

  const mutate = (payload: any) => {
    setPending(true);
    return apiMutations(payload)
      .finally(() => setPending(false))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error;
      });
  };

  return {
    mutate,
    pending,
  };
};
