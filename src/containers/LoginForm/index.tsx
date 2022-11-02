import LoginForm from "../../components/LoginForm";
import axios from "axios";
import { useRouter } from "next/router";
import useAuth from "../../app/hooks/useAuth";
import { HOME_PATH } from "../../constants";

export default function LoginFormContainer() {
  const { loading: isLoggingIn, login: handleOnLogin } = useAuth();
  const router = useRouter();
  const handleOnSubmit = async (value) => {
    console.log(value);
    handleOnLogin({ email: value?.email, password: value?.password })
      .then(() => {
        router.push(HOME_PATH);
      })
      .catch((err) => console.log(err));
  };
  return <LoginForm loading={isLoggingIn} onFinish={handleOnSubmit} />;
}
