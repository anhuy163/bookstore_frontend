import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { SERVER_LINK } from "../../constants";
import { useState } from "react";

const queryFn = () => {
  return axios.get(`${SERVER_LINK}/user`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("token")),
    },
  });
};

const useLazyQueryGetProfile = () => {
  const [loading, setLoading] = useState(false);
  const fetchData = async (enable) => {
    if (!enable) {
      return;
    }
    try {
      setLoading(true);
      const res = await queryFn();
      localStorage.setItem(
        "currentUser",
        JSON.stringify((res as any)?.data?.data)
      );
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return { fetchData, loading };
};

export default useLazyQueryGetProfile;
