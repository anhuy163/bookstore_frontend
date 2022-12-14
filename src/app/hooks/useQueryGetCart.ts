import { useQuery } from "react-query";
import axios from "axios";
import { SERVER_LINK } from "../../constants";

const queryFn = () => {
  return axios.get(`${SERVER_LINK}/cart`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("token")),
    },
  });
};

const useQueryGetCart = () => {
  const {
    data: result,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: "useQueryGetCart",
    queryFn: () => queryFn(),
  });

  return { data: (result as any)?.data?.data, loading, error };
};

export default useQueryGetCart;
