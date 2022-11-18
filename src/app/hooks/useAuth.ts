import { useMutation } from "react-query";
import axios from "axios";
import { LOGIN_PATH, HOME_PATH } from "../../constants";
import { useAppDispatch } from "./useRedux";
import { deleteUser } from "../redux/slices/userSlice";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const mutationFn = (body): any => {
    return axios.post("http://localhost:8080/authenticate", {
      email: body.email,
      password: body.password,
    });
  };

  const { isLoading: loading, mutateAsync } = useMutation({
    mutationFn: (body) => mutationFn(body),
    // onSuccess: () => console.log("123"),
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

  const logout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("currentUser");
      window.location.replace(HOME_PATH);
    } catch (error) {
      console.log(error);
    } finally {
      // window.location.replace(LOGIN_PATH);
      dispatch(deleteUser());
    }
  };

  return { loading, login, logout };
};

export default useAuth;
