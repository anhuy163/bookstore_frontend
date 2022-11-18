import { useMemo } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
const query = (key) => {
  return axios.get(
    `http://localhost:8080/book/searchBookByKeySearch/?sortType=mimax&keySearch=${key}&page=0&size=50`
    // `localhost:8080/book?page=1&size=20&category=552&sortBy=minmax`
  );
};

const useQueryGetBookBySearchKey = (searchKey) => {
  const {
    data: result,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["useQueryGetBooksByCategoryId", searchKey],
    queryFn: () => query(searchKey),
  });

  return { data: (result as any)?.data?.data, loading, error };
};

export default useQueryGetBookBySearchKey;
