import { useMutation } from "react-query";
import axios from "axios";
import { LOGIN_PATH, HOME_PATH, SERVER_LINK } from "../../constants";
import { useAppDispatch } from "./useRedux";
import { deleteUser } from "../redux/slices/userSlice";

export type LoginResponse = {
  code?: number;
  data?: {};
};

const useAuth = () => {
  const dispatch = useAppDispatch();
  const mutationFn = (body): any => {
    return axios.post(`${SERVER_LINK}/authenticate`, {
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
        resolve(result as LoginResponse);
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
      localStorage.removeItem("cart");
      window.location.replace(HOME_PATH);
    } catch (error) {
      console.log(error);
    } finally {
      // window.location.replace(LOGIN_PATH);
      dispatch(deleteUser());
    }
  };

  const logoutAfterChangePassword = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("cart");
      window.location.replace(LOGIN_PATH);
    } catch (error) {
      console.log(error);
      dispatch(deleteUser());
    }
  };

  return { loading, login, logout, logoutAfterChangePassword };
};

export default useAuth;
