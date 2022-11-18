import axios from "axios";
import { useQuery } from "react-query";

const query = (bookId) => {
  return axios.get(`http://localhost:8080/comment?bookId=${bookId}`);
};

const useQueryGetCommentsByBookId = (id) => {
  const {
    data: result,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["useQueryGetCommentsByBookId", id],
    queryFn: () => query(id),
  });

  return { data: (result as any)?.data.data, loading, error };
};

export default useQueryGetCommentsByBookId;
