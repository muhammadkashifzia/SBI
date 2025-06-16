import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const AuthFormOtp = () => {
  const formik = useFormik({
    initialValues: {
      otp: "",  
    },
    validationSchema: Yup.object({
      otp: Yup.string()
        .length(4, "4桁のコードを入力してください")
        .required("必須"),
    }),
    onSubmit: (values) => {
      console.log("OTP Entered:", values.otp);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-[32px]">
      <div className="flex justify-center">
        <InputOTP
          maxLength={4}
          value={formik.values.otp}
          onChange={(val) => formik.setFieldValue("otp", val)}
        >
          <InputOTPGroup className="flex space-x-[12px]">
            {[0, 1, 2, 3].map((i) => (
              <InputOTPSlot
                key={i}
                index={i}
                className="w-[80px] h-[80px] px-[8px] py-[10px] text-center text-[48px] text-[#006BA6] leading-[60px] border border-[#BDBDBD] rounded-[8px] focus-visible:outline-none focus-visible:ring-0"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="flex justify-center">
        <Button
          type="submit"
          className="w-[150px] px-[18px] py-[7px] bg-[#006BA6] border rounded-[4px] h-full max-h-[36px] hover:bg-[#006BA6]"
          disabled={!formik.isValid || !formik.dirty}
        >
          認証する
        </Button>
      </div>

      <div className="text-center text-[16px]">
        <span className="text-[#2C3237] cursor-pointer">メールが届いていない場合</span>
        <span className="text-[#006BA6]">こちらより再送する</span>{" "}
      </div>
    </form>
  );
};

export default AuthFormOtp;
