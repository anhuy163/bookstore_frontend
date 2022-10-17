import React from "react";
import AuthLayout from "../../src/containers/AuthLayout";
import RegisterForm from "../../src/components/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout title='Register'>
      <RegisterForm />
    </AuthLayout>
  );
}
