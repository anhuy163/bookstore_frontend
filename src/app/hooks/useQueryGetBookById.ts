import axios from "axios";
import { useQuery } from "react-query";
import { SERVER_LINK } from "../../constants";

const query = (bookId) => {
  return axios.get(`${SERVER_LINK}/book/${bookId}`);
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
