import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { SERVER_LINK } from "../../constants";

const useMutationPostComment = (id) => {
  const queryClient = useQueryClient();
  const mutationFn = (body): any => {
    return axios.post(
      `${SERVER_LINK}/comment`,
      {
        ...body,
        bookId: id,
        likeComment: 0,
      },
      { headers: { Authorization: JSON.parse(localStorage.getItem("token")) } }
    );
  };

  const { isLoading: loading, mutateAsync } = useMutation({
    mutationFn: (body) => mutationFn(body),
    onSuccess: () =>
      queryClient.invalidateQueries(["useQueryGetCommentsByBookId", id]),
  });

  const doMutation = (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await mutateAsync(body as never);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  return { doMutation, loading };
};

export default useMutationPostComment;
