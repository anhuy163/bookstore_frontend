import React, { useState } from "react";
import LoginForm from "../../src/components/LoginForm";
import AuthLayout from "../../src/containers/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout title='Login'>
      <LoginForm />
    </AuthLayout>
  );
}
