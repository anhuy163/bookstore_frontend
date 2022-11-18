import PopupChangePassword from "../../components/PopupChangePassword";

export default function PopupChangePasswordContainer({ open, onCancel }) {
  return <PopupChangePassword open={open} onCancel={onCancel} />;
}
