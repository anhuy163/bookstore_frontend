import { useMutation } from "react-query";
import axios from "axios";
import { SERVER_LINK } from "../../constants";
import { showErrorMessage, showSuccessMessage } from "../helpers/messageHelper";

const useMutationChangePassword = () => {
  const mutationFn = (body): any => {
    return axios.put(`${SERVER_LINK}/user`, body, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
  };

  const { isLoading: loading, mutateAsync } = useMutation({
    mutationFn: (body) => mutationFn(body),
    // onSuccess: () => {

    // }
  });

  const doMutation = (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await mutateAsync(body as never);
        resolve(result as any);
      } catch (error) {
        console.log(error);
      }
    });
  };

  return { doMutation, loading };
};

export default useMutationChangePassword;
