import { useMemo } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
const query = (id) => {
  return axios.get(
    `http://localhost:8080/book?page=1&size=20&category=${id}&sortBy=minmax`
    // `localhost:8080/book?page=1&size=20&category=552&sortBy=minmax`
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
