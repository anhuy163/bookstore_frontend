import { useMemo } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import { SERVER_LINK } from "../../constants";
const query = (key) => {
  return axios.get(
    `${SERVER_LINK}/book/searchBookByKeySearch/?sortType=mimax&keySearch=${key}&page=0&size=50`
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
