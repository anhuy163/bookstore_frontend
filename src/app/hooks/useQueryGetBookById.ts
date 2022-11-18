import axios from "axios";
import { useQuery } from "react-query";

const query = (bookId) => {
  return axios.get(`http://localhost:8080/book/${bookId}`);
};
const useQueryGetBookById = (id) => {
  const {
    data: result,
    isLoading: loading,
    error,
  } = useQuery<any>({
    queryKey: "getBookById",
    queryFn: () => query(id),
  });
  return { data: (result as any)?.data?.data || undefined, loading, error };
};

export default useQueryGetBookById;
