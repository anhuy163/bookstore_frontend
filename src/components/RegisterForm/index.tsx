import React, { useRef } from "react";
import { Button, Form, Input, message, Space, Typography } from "antd";
import {
  UserOutlined,
  LockOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import FormWrapper from "../FormWrapper";
import styles from "./styles.module.less";
import Link from "next/link";
import { useForm } from "antd/lib/form/Form";
import { LOGIN_PATH } from "../../constants";

export default function RegisterForm() {
  const [form] = useForm();

  const rules = {
    username: [
      { required: true, message: "Vui lòng điền tài khoản" },
      { whitespace: true },
    ],
    password: [
      { required: true, message: "Vui lòng điền mật khẩu" },
      { min: 8, message: "Mật khẩu ít nhất phải có 8 ký tự" },
    ],
    confirmPassword: [
      { required: true, message: "Vui lòng không bỏ trống" },
      {
        validator: (rule, value, cb) => {
          if (value !== form.getFieldValue("password")) cb("error");
        },
        message: "Không đúng với mật khẩu bạn đã nhập ở trên",
      },
    ],
    firstName: [
      {
        required: true,
        message: "Vui lòng nhập họ của bạn",
      },
      { max: 20, message: "Vượt quá số lượng ký tự" },
    ],
    lastName: [
      {
        required: true,
        message: "Vui lòng nhập tên của bạn",
      },
      { max: 20, message: "Vượt quá số lượng ký tự" },
    ],
  };
  return (
    <FormWrapper className={styles.formWrapper}>
      <Typography className={styles.formTitle}>Yuu Book</Typography>
      <Form form={form} className={styles.container}>
        <Form.Item
          label='Tài khoản'
          colon={false}
          name='username'
          rules={rules.username}>
          <Input addonBefore={<UserOutlined />} allowClear />
        </Form.Item>
        <Form.Item
          label='Mật khẩu'
          colon={false}
          name='password'
          rules={rules.password}>
          <Input.Password addonBefore={<LockOutlined />} allowClear />
        </Form.Item>
        <Form.Item
          label='Nhập lại mật khẩu'
          colon={false}
          name='confirmPassword'
          rules={rules.confirmPassword}>
          <Input.Password
            addonBefore={<LockOutlined />}
            allowClear></Input.Password>
        </Form.Item>
        <div className={styles.nameInputArea}>
          <Form.Item
            className={styles.firstName}
            rules={rules.firstName}
            colon={false}
            label='Họ'
            name='firstName'>
            <Input placeholder='Họ'></Input>
          </Form.Item>
          <Form.Item
            className={styles.lastName}
            rules={rules.lastName}
            name='lastName'
            colon={false}
            label='Tên'>
            <Input placeholder='Tên'></Input>
          </Form.Item>
        </div>
        <Space className={styles.registerBtn}>
          <Button className={styles.button} htmlType='submit' type='primary'>
            Register
          </Button>
        </Space>
        <Typography className={styles.btnSplitText}>or</Typography>
        <Space className={styles.loginWithGoogleBtn}>
          <Button htmlType='submit' type='primary'>
            <GooglePlusOutlined style={{ fontSize: "30" }} />
            Login with Google
          </Button>
        </Space>
        <div className={styles.loginLink}>
          Have an account yet?{" "}
          <Link href={LOGIN_PATH}>
            <a>Sign in</a>
          </Link>
        </div>
      </Form>
    </FormWrapper>
  );
}
