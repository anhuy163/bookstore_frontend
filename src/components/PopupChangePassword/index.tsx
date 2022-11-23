import { Modal, Form, Input, Button } from "antd";
import {} from "@ant-design/icons";
import styles from "./styles.module.less";
import FormWrapper from "../FormWrapper";
import { useForm } from "antd/lib/form/Form";

export default function PopupChangePassword({ loading, onFinish, ...props }) {
  // const [form] = useForm();
  const rules = {
    oldPassword: [
      { required: true, message: "Vui lòng không bỏ trống" },
      { min: 8, message: "Độ dài mật khẩu ít nhất 8 ký tự" },
    ],
    newPassword: [
      { required: true, message: "Vui lòng không bỏ trống" },
      { min: 8, message: "Độ dài mật khẩu ít nhất 8 ký tự" },
    ],
    newPassConfirm: [
      { required: true, message: "Vui lòng không bỏ trống" },
      { min: 8, message: "Độ dài mật khẩu ít nhất 8 ký tự" },
    ],
  };
  return (
    <Modal
      title='Đổi mật khẩu'
      className={styles.changePasswordModal}
      {...props}
      footer={false}
      closable={false}
      destroyOnClose>
      <FormWrapper className={styles.formWrapper} loading={loading}>
        <Form onFinish={onFinish} colon={false}>
          <Form.Item
            label='Mật khẩu hiện tại'
            name={"oldPassword"}
            rules={rules.oldPassword}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            label='Mật khẩu mới'
            name={"newPassword"}
            rules={rules.newPassword}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            label='Nhập lại mật khẩu mới'
            name={"newPassConfirm"}
            rules={rules.newPassConfirm}>
            <Input.Password />
          </Form.Item>
          <div className={styles.btnArea}>
            <Button className={styles.cancelBtn} onClick={props.onCancel}>
              Hủy bỏ
            </Button>
            <Button className={styles.confirmBtn} htmlType='submit'>
              Xác nhận
            </Button>
          </div>
        </Form>
      </FormWrapper>
    </Modal>
  );
}
