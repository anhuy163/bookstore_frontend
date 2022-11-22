import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { SERVER_LINK } from "../../constants";
import { showSuccessMessage } from "../helpers/messageHelper";

const useMutationChangeBookStatus = () => {
  const mutationFn = (body): any => {
    return axios.put(
      `${SERVER_LINK}/cart`,
      { bookId: body.bookId, status: body.status },
      {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      }
    );
  };
  const queryClient = useQueryClient();
  const {
    isLoading: loading,
    mutateAsync,
    error,
  } = useMutation({
    mutationFn: (body) => mutationFn(body),
    onSuccess: () => {
      queryClient.invalidateQueries("useQueryGetCart");
      showSuccessMessage("Cập nhật giỏ hàng thành công");
    },
  });

  const doMutation = (body) => {
    // console.log(body);

    return new Promise(async (resolve, reject) => {
      try {
        const res = await mutateAsync(body as never);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };
  return { doMutation, loading };
};

export default useMutationChangeBookStatus;
