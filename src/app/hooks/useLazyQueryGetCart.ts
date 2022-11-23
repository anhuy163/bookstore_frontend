import { useState } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { SERVER_LINK } from "../../constants";

const queryFn = () => {
  return axios.get(`${SERVER_LINK}/cart`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("token")),
    },
  });
};

const useLazyQueryGetCart = () => {
  const [loading, setLoading] = useState(false);
  const fetchData = async (enable) => {
    if (!enable) {
      return;
    }
    try {
      setLoading(true);
      const res = await queryFn();
      localStorage.setItem("cart", JSON.stringify((res as any)?.data?.data));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return { fetchData, loading };
};

export default useLazyQueryGetCart;
