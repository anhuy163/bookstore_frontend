import { useMutation, useQueryClient, QueryClient } from "react-query";
import axios from "axios";
import { SERVER_LINK } from "../../constants";
import { showSuccessMessage } from "../helpers/messageHelper";
import useLazyQueryGetCart from "./useLazyQueryGetCart";
import { setCart } from "../redux/slices/cartSlice";
import { useAppDispatch } from "./useRedux";

const useMutationAddBook = () => {
  const dispatch = useAppDispatch();
  const { fetchData: fetchCart } = useLazyQueryGetCart();
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
      queryClient.invalidateQueries("useQueryGetCart");
      showSuccessMessage("Cập nhật giỏ hàng thành công");
      fetchCart(true).then(() => {
        dispatch(setCart(JSON.parse(localStorage.getItem("cart"))));
      });
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
