import { useQuery } from "react-query";
import axios from "axios";
import { SERVER_LINK } from "../../constants";

const query = () => {
  return axios.get(`${SERVER_LINK}/category`);
};

const useQueryGetBookCategories = () => {
  const {
    data: result,
    isLoading: loading,
    error,
  } = useQuery<any>({
    queryKey: "useQueryGetBookCategories",
    queryFn: () => query(),
    // enabled: false,
  });

  return { data: (result as any)?.data?.data || undefined, loading, error };
};

export default useQueryGetBookCategories;
