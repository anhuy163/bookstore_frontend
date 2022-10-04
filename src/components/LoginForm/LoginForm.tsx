import React from "react";
import { Button, Form, Input, Space, Typography } from "antd";
import "antd/dist/antd.css";
import FormWrapper from "../FormWrapper/FormWrapper";
import styles from "./styles.module.less";
import {
  UserOutlined,
  LockOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export default function LoginForm() {
  const rules = {
    username: [
      { required: true, message: "Please fill your username" },
      { whitespace: true },
    ],
    password: [
      { required: true, message: "Please fill your password" },
      { min: 8, message: "Your password must have 8 characters at least" },
    ],
  };
  return (
    <FormWrapper className={styles.formWrapper}>
      <Typography className={styles.formTitle}>Yuu Book</Typography>
      <Form className={styles.container}>
        <Form.Item colon={false} name='username' rules={rules.username}>
          <Input addonBefore={<UserOutlined />} allowClear />
        </Form.Item>
        <Form.Item colon={false} name='password' rules={rules.password}>
          <Input.Password addonBefore={<LockOutlined />} allowClear />
        </Form.Item>
        <div className={styles.forgotPassword}>
          <Link href=''>
            <a>forgot password</a>
          </Link>
        </div>
        <Space className={styles.loginBtn}>
          <Button className={styles.button} htmlType='submit' type='primary'>
            Login
          </Button>
        </Space>
        <Typography className={styles.btnSplitText}>or</Typography>
        <Space className={styles.loginWithGoogleBtn}>
          <Button htmlType='submit' type='primary'>
            <GooglePlusOutlined style={{ fontSize: "30" }} />
            Login with Google
          </Button>
        </Space>
        <div className={styles.registerLink}>
          Don not have an account?{" "}
          <Link href=''>
            <a>Register here</a>
          </Link>
        </div>
      </Form>
    </FormWrapper>
  );
}
