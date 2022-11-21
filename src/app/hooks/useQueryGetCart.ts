import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { SERVER_LINK } from "../../constants";

const queryFn = () => {
  return axios.get(`${SERVER_LINK}/cart`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("token")),
    },
  });
};

const useQueryGetCart = (enabled) => {
  const {
    data: result,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: "useQueryGetCart",
    queryFn: () => queryFn(),
    //   onSuccess: () => console.log("123"),

    enabled: enabled,
  });

  return { data: (result as any)?.data?.data, loading };
};

export default useQueryGetCart;
