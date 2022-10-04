import React, { useState } from "react";
import LayoutContainer from "../../src/components/Layout/Layout";
import LoginFormContainer from "../../src/containers/LoginForm/LoginForm";
import AuthLayout from "../../src/components/AuthLayout/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout title='Login'>
      <LoginFormContainer />
    </AuthLayout>
  );
}
