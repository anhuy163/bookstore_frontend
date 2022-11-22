import { useMutation, useQueryClient } from "react-query";
import { showSuccessMessage } from "../helpers/messageHelper";
import { SERVER_LINK } from "../../constants";
import axios from "axios";

const mutationFn = (body) => {
  return axios.post(`${SERVER_LINK}/user`, body, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("token")),
    },
  });
};

const useMutationUpdateUserProfile = () => {
  const queryClient = useQueryClient();
  const {
    isLoading: loading,
    error,
    mutateAsync,
  } = useMutation({
    mutationFn: (body) => mutationFn(body),
    onSuccess: () => {
      queryClient.invalidateQueries("useQueryGetUserProfile");
      showSuccessMessage("Cập nhật hồ sơ thành công");
    },
  });

  const doMutation = (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await mutateAsync(body as never);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  return { doMutation, loading };
};

export default useMutationUpdateUserProfile;
