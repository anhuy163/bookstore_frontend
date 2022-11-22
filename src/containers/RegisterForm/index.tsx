import RegisterForm from "../../components/RegisterForm";
import useMutationRegister from "../../app/hooks/useMutationRegister";
import { showErrorMessage } from "../../app/helpers/messageHelper";
import { LOGIN_PATH } from "../../constants";

export default function RegisterFormContainer() {
  const { register, loading } = useMutationRegister();
  const handleOnRegister = (value) => {
    console.log(value);
    const { username, firstName, lastName, password, confirmPassword } = value;
    if (confirmPassword !== password) {
      showErrorMessage("Mật khẩu xác thực không đúng");
      return;
    }
    register({
      email: username,
      password,
      surName: firstName,
      name: lastName,
    }).then((res) => {
      if ((res as any)?.data.code !== 0) {
        showErrorMessage("Người dùng đã tồn tại");
        return;
      }
      window.location.replace(LOGIN_PATH);
    });
  };
  return <RegisterForm loading={loading} onFinish={handleOnRegister} />;
}
