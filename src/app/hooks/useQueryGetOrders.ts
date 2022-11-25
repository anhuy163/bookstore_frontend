import { useQuery } from "react-query";
import { SERVER_LINK } from "../../constants";
import axios from "axios";

const queryFn = () => {
  return axios.get(`${SERVER_LINK}/cart?status=${true}`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("token")),
    },
  });
};

const useQueryGetOrders = () => {
  const {
    data: result,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: "useQueryGetOrders",
    queryFn: () => queryFn(),
  });

  return { data: (result as any)?.data.data, loading, error };
};

export default useQueryGetOrders;
