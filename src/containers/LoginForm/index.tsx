import LoginForm from "../../components/LoginForm";
import { useRouter } from "next/router";
import useAuth from "../../app/hooks/useAuth";
import { HOME_PATH, BOOK_PATH } from "../../constants";
import { setUser } from "../../app/redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/useRedux";
import { showErrorMessage } from "../../app/helpers/messageHelper";

export default function LoginFormContainer() {
  const user = useAppSelector((state) => state.user);
  console.log(user);

  const dispatch = useAppDispatch();
  const { loading: isLoggingIn, login: handleOnLogin } = useAuth();
  const router = useRouter();
  const handleOnSubmit = async (value) => {
    console.log(value);
    handleOnLogin({ email: value?.email, password: value?.password })
      .then((res) => {
        console.log(res);
        if ((res as any)?.data.code !== 0) {
          showErrorMessage((res as any).data.data);
          return;
        }
        localStorage.setItem(
          "currentUser",
          JSON.stringify((res as any)?.data.data)
        );
        localStorage.setItem(
          "token",
          JSON.stringify((res as any)?.data.data.jwtToken)
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
