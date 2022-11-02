import { useMutation } from "react-query";
import axios from "axios";

const useAuth = () => {
  const mutationFn = (body): any => {
    return axios.post("", { body });
  };

  const { isLoading: loading, mutateAsync } = useMutation({
    mutationFn: (body) => mutationFn(body),
    onSuccess: () => console.log("123"),
  });

  const login = (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await mutateAsync(body as never);
        resolve((result as any)?.data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  return { loading, login };
};

export default useAuth;
