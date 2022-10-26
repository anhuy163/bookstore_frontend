import { Button, Form, Input, Typography } from "antd";
import styles from "./styles.module.less";
import UserAvatar from "../UserAvatar";
import FormWrapper from "../FormWrapper";
import { AVATAR_SIZE } from "../../constants";

export default function UserInfo() {
  const rules = {
    name: [{ required: true, message: "Please not leave this field blank" }],
    phone: [{ required: true, message: "Please not leave this field blank" }],
    address: [{ required: true, message: "Please not leave this field blank" }],
  };
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.avatar}>
        <UserAvatar size={AVATAR_SIZE.large} />
      </div>
      <FormWrapper className={styles.formWrapper}>
        <Form>
          <Form.Item label='Tài khoản' colon={false} name='username'>
            vegeta696969
          </Form.Item>
          <Form.Item label='Mật khẩu' colon={false} name='password'>
            123456
          </Form.Item>
          <Form.Item
            label='Họ và tên'
            colon={false}
            rules={rules.name}
            name='name'>
            <Input />
          </Form.Item>
          <Form.Item
            label='Điện thoại'
            colon={false}
            rules={rules.phone}
            name='phone'>
            <Input />
          </Form.Item>
          <Form.Item
            label='Địa chỉ'
            colon={false}
            rules={rules.address}
            name='address'>
            <Input />
          </Form.Item>
          <div className={styles.buttonArea}>
            <Button htmlType='submit'>Xác nhận</Button>
          </div>
        </Form>
      </FormWrapper>
    </div>
  );
}
