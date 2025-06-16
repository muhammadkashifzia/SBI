import AuthLayout from "@/components/layouts/AuthLayout";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthForm from "@/components/auth/AuthForm";

const loginFields = [
  { id: "email", label: "Email", type: "email", placeholder: "こちらに入力してください" },
  {
    id: "パスワード",
    label: "パスワード",
    type: "パスワード",
    placeholder: "こちらに入力してください",
  },
];
export default function Login() {
  return (
    <AuthLayout>
      <AuthHeader
        title="ログインページ"
        subtitle="下記よりログイン情報をご入力ください"
      />
      <AuthForm type="login" buttonText="ログイン" fields={loginFields} />
    </AuthLayout>
  );
}
