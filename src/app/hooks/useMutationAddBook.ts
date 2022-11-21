import { useMutation, useQueryClient, QueryClient } from "react-query";
import axios from "axios";
import { SERVER_LINK } from "../../constants";
import { showSuccessMessage } from "../helpers/messageHelper";

const useMutationAddBook = () => {
  // const queryClient = useQueryClient();
  const queryClient = useQueryClient();
  const mutationFn = (body): any => {
    return axios.post(
      `${SERVER_LINK}/cart`,
      { bookId: body.bookId, quantity: body.quantity },
      {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      }
    );
  };

  const { isLoading: loading, mutateAsync } = useMutation({
    mutationFn: (body) => mutationFn(body),
    onSuccess: () => {
      showSuccessMessage("Thêm sách thành công");
    },
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
