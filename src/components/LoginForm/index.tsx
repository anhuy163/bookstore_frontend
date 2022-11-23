import React from "react";
import { Button, Form, Input, Space, Typography } from "antd";
import "antd/dist/antd.css";
import FormWrapper from "../FormWrapper";
import styles from "./styles.module.less";
import {
  UserOutlined,
  LockOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { REGISTER_PATH } from "../../constants";
import { useRouter } from "next/router";
import { useForm } from "antd/lib/form/Form";

export default function LoginForm({ loading, ...props }) {
  const [form] = useForm();
  const rules = {
    email: [
      { required: true, message: "Vui lòng không bỏ trống" },
      { whitespace: true },
    ],
    password: [
      { required: true, message: "Vui lòng không bỏ trống" },
      { min: 8, message: "Độ dài mật khẩu ít nhất 8 ký tự" },
    ],
  };
  return (
    <FormWrapper loading={loading} className={styles.formWrapper}>
      <Typography className={styles.formTitle}>UET BOOKS</Typography>
      <Form form={form} className={styles.container} {...props}>
        <Form.Item
          colon={false}
          name='email'
          rules={[
            { type: "email", message: "Email không hợp lệ" },
            { required: true, message: "Vui lòng điền tài khoản" },
          ]}>
          <Input addonBefore={<UserOutlined />} allowClear />
        </Form.Item>
        <Form.Item colon={false} name='password' rules={rules.password}>
          <Input.Password addonBefore={<LockOutlined />} allowClear />
        </Form.Item>
        {/* <div className={styles.forgotPassword}>
          <Link href=''>
            <a>forgot password</a>
          </Link>
        </div> */}
        <Space className={styles.loginBtn}>
          <Button className={styles.button} htmlType='submit' type='primary'>
            Đăng nhập
          </Button>
        </Space>
        {/* <Typography className={styles.btnSplitText}>or</Typography> */}
        {/* <Space className={styles.loginWithGoogleBtn}>
          <Button htmlType='submit' type='primary'>
            <GooglePlusOutlined style={{ fontSize: "30" }} />
            Login with Google
          </Button>
        </Space> */}
        <div className={styles.registerLink}>
          Bạn chưa có tài khoản ?{" "}
          <Link href={REGISTER_PATH}>
            <a>Đăng ký ngay</a>
          </Link>
        </div>
      </Form>
    </FormWrapper>
  );
}
