import { useMemo } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import { SERVER_LINK } from "../../constants";
const query = (id) => {
  return axios.get(
    `${SERVER_LINK}/book?page=1&size=20&category=${id}&sortBy=minmax`
  );
};

const useQueryGetBooksByCategoryId = (id) => {
  const {
    data: result,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["useQueryGetBooksByCategoryId", id],
    queryFn: () => query(id),
  });

  return { data: (result as any)?.data?.data, loading, error };
};

export default useQueryGetBooksByCategoryId;
