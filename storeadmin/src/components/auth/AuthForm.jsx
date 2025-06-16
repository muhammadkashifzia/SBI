import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TermsPolicyModal from "../TermsPolicyModal";
import { Link } from "react-router-dom";

const AuthForm = ({ fields, buttonText, type = "register" }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const initialValues = fields.reduce((acc, field) => {
    acc[field.id] = "";
    return acc;
  }, {});

  const validationSchema = Yup.object(
    fields.reduce((acc, field) => {
      acc[field.id] = Yup.string().required("必須項目です");
      return acc;
    }, {})
  );

  return (
    <>
      {showModal && <TermsPolicyModal onClose={() => setShowModal(false)} />}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form Data:", values);
          if (type === "register") {
            console.log("Agreed:", agree);
          }
        }}
      >
        {({ isValid, dirty }) => (
          <Form className="space-y-[32px]">
            <div className="space-y-[20px]">
              {fields.map((field) => (
                <div className="space-y-2" key={field.id}>
                  <Label
                    htmlFor={field.id}
                    className="text-[16px] font-normal leading-[100%] text-[#2C3237]"
                  >
                    {field.label}
                  </Label>

                  {field.type === "password" ? (
                    <Field name={field.id}>
                      {({ field }) => (
                        <div className="relative w-full">
                          <Input
                            id={field.name}
                            type={showPassword ? "text" : "password"}
                            className="w-full h-[48px] px-[14px] py-[16px] border border-[#E6E6E6] rounded-[4px] pr-12 focus-visible:outline-none focus-visible:ring-0"
                            {...field}
                            placeholder={
                              fields.find((f) => f.id === field.name)
                                ?.placeholder || ""
                            }
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                          >
                            {showPassword ? (
                              <Eye size={20} />
                            ) : (
                              <EyeOff size={20} />
                            )}
                          </button>
                        </div>
                      )}
                    </Field>
                  ) : (
                    <Field name={field.id}>
                      {({ field }) => (
                        <Input
                          id={field.name}
                          type={field.type}
                          className="w-full h-[48px] px-[14px] py-[16px] border border-[#E6E6E6] rounded-[4px] focus-visible:outline-none focus-visible:ring-0"
                          {...field}
                          placeholder={
                            fields.find((f) => f.id === field.name)
                              ?.placeholder || ""
                          }
                        />
                      )}
                    </Field>
                  )}
                </div>
              ))}
            </div>

            {/* Register only: Checkbox */}
            {type === "register" && (
              <div className="flex items-start space-x-[12px]">
                <Checkbox
                  id="terms"
                  checked={agree}
                  onCheckedChange={(val) => {
                    const isChecked = !!val;
                    if (!agree && isChecked) {
                      setShowModal(true);
                    }
                    setAgree(isChecked);
                  }}
                  className="data-[state=checked]:bg-[#006BA6] data-[state=checked]:text-white data-[state=checked]:border-none border"
                />

                <label
                  htmlFor="terms"
                  className="text-[16px] text-[#2C3237] leading-snug cursor-pointer"
                >
                  <span className="text-[#00519E] underline">
                    利用規約 / プライバシーポリシー
                  </span>
                  を確認し、同意します。
                </label>
              </div>
            )}

            {/* Login only: Forgot Password */}
            {type === "login" && (
              <div className="text-left">
                <Link
                  to="/forgot-password"
                  className="text-[14px] text-[#014F8B] cursor-pointer"
                >
                  パスワードをお忘れの場合
                </Link>
              </div>
            )}

            <Button
              type="submit"
              className="w-full px-[18px] py-[10px] bg-[#006BA6] text-white border rounded-[4px] max-h-[40px] hover:bg-[#005c90]"
              disabled={!(isValid && dirty && (type !== "register" || agree))}
            >
              {buttonText}
            </Button>

            {/* Register only: Redirect */}
            {type === "register" && (
              <div className="text-center text-[16px]">
                <span className="text-[#006BA6]">
                  アカウントをお持ちですか？
                </span>{" "}
                <Link to="/login" className="text-[#2C3237] cursor-pointer">
                  ログイン
                </Link>
              </div>
            )}

            {/* Recover only: Back to login */}
            {type === "recover" && (
              <Link
                className="flex items-center justify-center space-x-[8px] cursor-pointer "
                to="/login"
              >
                <img
                  src="/svg/shared/Backarrow.svg"
                  alt="Back"
                  className="w-[20px] h-[20px]"
                />
                <span className="text-[16px] text-[#006BA6] leading-[150%] ">
                  ログインページに戻る
                </span>
              </Link>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AuthForm;
