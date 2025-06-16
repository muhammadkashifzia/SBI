import AuthLayout from "@/components/layouts/AuthLayout";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthForm from "@/components/auth/AuthForm";

const forgetPassword = [
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "メールを入力",
  },
];

export default function ForgetPassword() {
  return (
    <AuthLayout>
      <AuthHeader
        title="パスワード忘れ"
        subtitle="下記よりパスワード変更の手続きを行えます"
      />
      <AuthForm
        type="recover"
        buttonText="パスワードをリセット"
        fields={forgetPassword}
      />
    </AuthLayout>
  );
}
