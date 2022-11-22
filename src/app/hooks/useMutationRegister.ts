import { useMutation } from "react-query";
import axios from "axios";
import { SERVER_LINK } from "../../constants";

const useMutationRegister = () => {
  const mutationFn = (body): any => {
    return axios.post(`${SERVER_LINK}/register`, body);
  };

  const { isLoading: loading, mutateAsync } = useMutation({
    mutationFn: (body) => mutationFn(body),
    // onSuccess: () => console.log("123"),
  });

  const register = (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await mutateAsync(body as never);
        resolve(result);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  return { loading, register };
};

export default useMutationRegister;
