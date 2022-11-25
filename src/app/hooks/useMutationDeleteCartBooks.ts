import { showSuccessMessage } from "./../helpers/messageHelper";
import { useQueryClient, useMutation } from "react-query";
import { SERVER_LINK } from "../../constants";
import axios from "axios";
import { convertNumberArray } from "../helpers/textHelper";
import useLazyQueryGetCart from "./useLazyQueryGetCart";
import { setCart } from "../redux/slices/cartSlice";
import { useAppDispatch } from "./useRedux";

const mutationFn = (body): any => {
  const arrayString = convertNumberArray(body);
  // console.log(arrayString);

  return axios.delete(`${SERVER_LINK}/cart?bookIds=${arrayString}`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("token")),
    },
  });
};

const useMutationDeleteCartBooks = () => {
  const dispatch = useAppDispatch();
  const { fetchData: fetchCart } = useLazyQueryGetCart();
  const queryClient = useQueryClient();
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
        resolve(result as any);
      } catch (error) {
        reject(error);
      }
    });
  };

  return { doMutation, loading };
};

export default useMutationDeleteCartBooks;
