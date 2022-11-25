import { SERVER_LINK } from "./../../constants";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { showSuccessMessage } from "../helpers/messageHelper";
import useLazyQueryGetCart from "./useLazyQueryGetCart";
import { setCart } from "../redux/slices/cartSlice";
import { useAppDispatch } from "./useRedux";

const useMutationPayCart = () => {
  const dispatch = useAppDispatch();
  const { fetchData: fetchCart } = useLazyQueryGetCart();
  const queryClient = useQueryClient();
  const mutationFn = (body): any => {
    return axios.post(`${SERVER_LINK}/order`, body, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
  };

  const {
    isLoading: loading,
    mutateAsync,
    error,
  } = useMutation({
    mutationFn: (body) => mutationFn(body),
    onSuccess: () => {
      showSuccessMessage("Thanh toán thành công");
      queryClient.invalidateQueries("useQueryGetCart");
      queryClient.invalidateQueries("useQueryGetOrders");
      queryClient.invalidateQueries("useQueryGetPayedOrders");
      fetchCart(true).then(() => {
        dispatch(setCart(JSON.parse(localStorage.getItem("cart"))));
      });
    },
  });

  const doMutation = (body): any => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await mutateAsync(body);
        resolve(res as any);
      } catch (error) {
        reject(error);
      }
    });
  };

  return { doMutation, loading, error };
};

export default useMutationPayCart;
