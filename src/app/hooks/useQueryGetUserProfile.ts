import axios from "axios";
import { useQuery } from "react-query";

const query = () => {
  return axios.get("http://localhost:8080/user", {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("token")),
    },
  });
};

const useQueryGetUserProfile = (enabled) => {
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
