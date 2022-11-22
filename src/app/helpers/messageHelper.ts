import { message } from "antd";

export const showSuccessMessage = (msg) => {
  message.success(msg);
};

export const showErrorLoginMessage = (msg) => {
  if (msg === "Account don't exist")
    message.error("Không tồn tại tài khoản này");
  else message.error("Sai mật khẩu");
};

export const showErrorMessage = (msg) => {
  message.error(msg);
};
