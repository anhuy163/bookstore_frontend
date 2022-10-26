import React, { useState } from "react";
import LoginForm from "../../src/components/LoginForm";
import AuthLayout from "../../src/containers/AuthLayout";
import LoginFormContainer from "../../src/containers/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout title='Login'>
      <LoginFormContainer />
    </AuthLayout>
  );
}
