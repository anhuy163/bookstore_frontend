import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { SERVER_LINK } from "../../constants";

const query = () => {
  return axios.get(`${SERVER_LINK}/user`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("token")),
    },
  });
};

const useQueryGetUserProfile = (enabled) => {
  // const queryClient = useQueryClient();
  // queryClient.invalidateQueries("useQueryGetuserProfile");

  const {
    data: result,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: "useQueryGetUserProfile",
    queryFn: () => query(),
    enabled: enabled,
  });

  const fetchData = () => {
    localStorage.setItem(
      "currentUser",
      JSON.stringify((result as any)?.data?.data)
    );
  };

  return { fetchData, data: (result as any)?.data?.data, loading, error };
};

export default useQueryGetUserProfile;
