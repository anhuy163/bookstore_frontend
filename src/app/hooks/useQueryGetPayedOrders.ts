import { useQuery } from "react-query";
import axios from "axios";
import { SERVER_LINK } from "../../constants";

const useQueryGetPayedOrders = () => {
  const queryFn = () => {
    return axios.get(`${SERVER_LINK}/order`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
  };

  const {
    data: result,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: "useQueryGetPayedOrders",
    queryFn: () => queryFn(),
  });
  return { data: (result as any)?.data?.data || [], loading, error };
};

export default useQueryGetPayedOrders;
