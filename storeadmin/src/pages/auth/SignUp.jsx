import AuthLayout from "@/components/layouts/AuthLayout";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthForm from "@/components/auth/AuthForm";

const signUpFields = [
  {
    id: "店舗名",
    label: "店舗名",
    type: "text",
    placeholder: "こちらに入力してください",
  },
  {
    id: "店舗担当者名",
    label: "店舗担当者名",
    type: "text",
    placeholder: "こちらに入力してください",
  },
  { id: "email", label: "Email", type: "email", placeholder: "こちらに入力してください" },
  {
    id: "パスワード",
    label: "パスワード",
    type: "パスワード",
    placeholder: "こちらに入力してください",
  },
];
export default function SignUp() {
  return (
    <AuthLayout>
      <AuthHeader
        title="店舗向け会員登録"
        subtitle="ここから店舗のアカウントを登録することで、Web3 割を利用することができます。"
      />
      <AuthForm type="register" buttonText="登録" fields={signUpFields} />
    </AuthLayout>
  );
}
