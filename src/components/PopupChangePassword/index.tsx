import { Modal, Form, Input, Button } from "antd";
import {} from "@ant-design/icons";
import styles from "./styles.module.less";
import FormWrapper from "../FormWrapper";
import { useForm } from "antd/lib/form/Form";

export default function PopupChangePassword(props) {
  const [form] = useForm();
  return (
    <Modal
      className={styles.changePasswordModal}
      {...props}
      footer={false}
      closable={false}
      destroyOnClose>
      <FormWrapper className={styles.formWrapper}>
        <Form colon={false}>
          <Form.Item label='Mật khẩu hiện tại'>
            <Input.Password />
          </Form.Item>
          <Form.Item label='Mật khẩu mới'>
            <Input.Password />
          </Form.Item>
          <Form.Item label='Nhập lại mật khẩu mới'>
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
