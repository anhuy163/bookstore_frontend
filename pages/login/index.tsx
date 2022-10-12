import React, { useState } from "react";
import LoginForm from "../../src/components/LoginForm/LoginForm";
import AuthLayout from "../../src/containers/AuthLayout/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout title='Login'>
      <LoginForm />
    </AuthLayout>
  );
}
