import LoginForm from "../../components/LoginForm";
import axios from "axios";
import { useRouter } from "next/router";

export default function LoginFormContainer() {
  const router = useRouter();
  const handleOnSubmit = async (value) => {
    console.log(value);
    await axios({
      method: "post",
      url: "http://192.168.1.190/authenticate",
      data: { email: value?.email, password: value?.password },
    })
      .then(() => router.push("/"))
      .catch((err) => console.log(err));
  };
  return <LoginForm onFinish={handleOnSubmit} />;
}
