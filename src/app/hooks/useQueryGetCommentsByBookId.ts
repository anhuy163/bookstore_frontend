import axios from "axios";
import { useQuery } from "react-query";
import { SERVER_LINK } from "../../constants";

const query = (bookId) => {
  return axios.get(`${SERVER_LINK}/comment?bookId=${bookId}`);
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
