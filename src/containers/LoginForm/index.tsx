import LoginForm from "../../components/LoginForm";
import axios from "axios";
import { useRouter } from "next/router";
import useAuth from "../../app/hooks/useAuth";
import { HOME_PATH, BOOK_PATH } from "../../constants";
import { setUser } from "../../app/redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/useRedux";

export default function LoginFormContainer() {
  const user = useAppSelector((state) => state.user);
  console.log(user);

  const dispatch = useAppDispatch();
  const { loading: isLoggingIn, login: handleOnLogin } = useAuth();
  const router = useRouter();
  const handleOnSubmit = async (value) => {
    // console.log(value);
    handleOnLogin({ email: value?.email, password: value?.password })
      .then((res) => {
        console.log(res);
        localStorage.setItem("currentUser", JSON.stringify((res as any)?.data));
        localStorage.setItem(
          "token",
          JSON.stringify((res as any)?.data.jwtToken)
        );
        if (router.query.bookId) {
          router.push(`${BOOK_PATH}/${router.query.bookId}`);
          return;
        }
        window.location.replace(HOME_PATH);
      })
      .catch((err) => console.log(err));
  };
  return <LoginForm loading={isLoggingIn} onFinish={handleOnSubmit} />;
}
