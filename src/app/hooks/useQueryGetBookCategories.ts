import { useQuery } from "react-query";
import axios from "axios";

const query = () => {
  return axios.get("http://localhost:8080/category");
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
