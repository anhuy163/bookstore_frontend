import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useMutationAddBook = () => {
  const queryClient = useQueryClient();
  const mutationFn = (body): any => {
    return axios.post("", {});
  };

  const { isLoading: loading, mutateAsync } = useMutation({
    mutationFn: (body) => mutationFn(body),
    onSuccess: () => queryClient.invalidateQueries(""),
  });

  const doMutation = (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await mutateAsync(body as never);
        resolve((result as any)?.data);
      } catch (error) {
        reject(error);
      }
    });
  };

  return { doMutation, loading };
};

export default useMutationAddBook;
