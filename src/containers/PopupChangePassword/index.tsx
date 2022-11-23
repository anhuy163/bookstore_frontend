import PopupChangePassword from "../../components/PopupChangePassword";
import useMutationChangePassword from "../../app/hooks/useMutationChangePassword";
import useAuth from "../../app/hooks/useAuth";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../app/helpers/messageHelper";

export default function PopupChangePasswordContainer({ open, onCancel }) {
  const { doMutation: changePassword, loading } = useMutationChangePassword();
  const { logoutAfterChangePassword } = useAuth();
  const handleOnFinish = (value) => {
    console.log(value);
    const { oldPassword, newPassword, newPassConfirm } = value;
    if (newPassConfirm !== newPassword) {
      showErrorMessage("Mật khẩu xác thực không đúng");
      return;
    }
    changePassword(value).then((res) => {
      if ((res as any)?.data?.code !== 0) {
        (res as any)?.data?.code === 2 &&
          showErrorMessage("Mật khẩu hiện tại không đúng");
        return;
      }
      showSuccessMessage("Đổi mật khẩu thành công");
      logoutAfterChangePassword();
    });
  };

  return (
    <PopupChangePassword
      onFinish={handleOnFinish}
      open={open}
      onCancel={onCancel}
      loading={loading}
    />
  );
}
