 import AuthLayout from "@/components/layouts/AuthLayout";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthFormOtp from "@/components/auth/AuthFormOtp";

export default function OtpVerify() {
  return (
    <AuthLayout>
      <AuthHeader
        title="メールを確認"
        subtitle="認証メールを{Email address}に送付しました"
      />
      <AuthFormOtp />
    </AuthLayout>
  );
}
