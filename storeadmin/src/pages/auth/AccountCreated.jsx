import AuthLayout from "@/components/layouts/AuthLayout";
import AuthHeader from "@/components/auth/AuthHeader";
import { Button } from "@/components/ui/button";

export default function AccountCreated() {
  return (
    <AuthLayout>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[524px] space-y-[32px]">
          <AuthHeader
            title="アカウントが作成されました"
            subtitle="アカウントが正常に作成されました。メールアドレスとパスワードで再度ログインできます。"
          />

          <div className="flex justify-center mb-[268px]">
            <Button className="w-[150px] bg-[#006BA6] cursor-pointer text-white rounded-[4px] hover:bg-[#006BA6]">
              ログイン
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
