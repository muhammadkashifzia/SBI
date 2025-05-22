'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('無効なメールアドレスです')
        .required('必須項目です'),
      password: Yup.string().required('パスワードは必須です'),
    }),
    onSubmit: (values) => {
      // Handle login logic here
      console.log('Login submitted:', values);
    },
  });

  return (
    <>
      <Head>
        <title>スナックサファリ | ログイン</title>
      </Head>
      <main className="min-h-screen  flex justify-center px-4 pt-[16px] pb-[150px]">
        <div className="bg-white rounded-lg pt-[48px] pb-[64px] px-[16px] md:px-[116px] lg:px-[116px] w-full max-w-[712px] text-center">
          <Image
            src="/assets/svg/logo.svg"
            alt="スナックサファリ"
            className="mb-[32px] w-full max-w-[180px] mx-auto"
            width={200}
            height={100}
          />

          <h2 className="text-[18px] font-bold text-[#1E1C1C]">ログイン</h2>
          {/* <p className="text-[14px] text-[#1E1C1C] mt-[16px]">
            ※こちらは店舗登録済の＜スナック店舗さま専用＞のログイン画面です。
          </p> */}

          <form onSubmit={formik.handleSubmit} className="mt-[16px] sm:mt-6">
            <div className="text-left mb-[16px]">
              <label className="block mb-[6px] text-[12px] font-normal text-[#1E1C1C]">
                メールアドレス
              </label>
              <input
                type="email"
                name="email"
                placeholder="mail@example.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`text-[15px] w-full px-[16px] py-[13px] border-[2px] rounded-[8px] text-[#1E1C1C] placeholder:text-[#BBBBBB] ${
                  formik.touched.email && formik.errors.email
                    ? 'border-red-500'
                    : 'border-[#BBBBBB]'
                } focus:outline-none  focus:border-[#B900B3]`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-[12px] mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div className="text-left mb-[24px]">
              <label className="block mb-[6px] text-[12px] font-normal text-[#1E1C1C]">
                パスワード
              </label>
              <input
                type="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`text-[15px] w-full px-[16px] py-[13px] border-[2px] rounded-[8px] text-[#1E1C1C] placeholder:text-[#BBBBBB] ${
                  formik.touched.password && formik.errors.password
                    ? 'border-red-500'
                    : 'border-[#BBBBBB]'
                } focus:outline-none  focus:border-[#B900B3]`}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-[12px] mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-[#B900B3] text-white py-[13px] rounded-[8px] hover:bg-[#B900B3] text-[15px] font-bold flex justify-center items-center px-[16px] relative"
            >
              ログイン
              <svg
                className="absolute right-[16px] sm:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
              >
                <path
                  d="M6.92578 7.29681L0.999383 1.00002"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6.92578 7.48511L0.999384 13.7819"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>

          <p className="text-[12px] text-[#666666] mt-4 md:text-left text-center">
            <Link href="#" className="text-[#0073CC] underline">
              利用規約
            </Link>
            及び
            <Link href="#" className="text-[#0073CC] underline ml-1">
              プライバシーポリシー
            </Link>
            に同意の上、ログインへお進みください。
          </p>

          <div className="mt-[16px] text-sm text-left sm:text-right mb-[40px] sm:mb-[48px]">
            <Link
              href="#"
              className="text-[#0073CC] underline text-[12px] font-normal"
            >
              パスワードを忘れた方はこちら
            </Link>
          </div>

          <div className="flex items-center mb-[25px]">
            <hr className="flex-grow border-t border-[#E5E5E5]" />
            <span className="mx-4 text-[#1E1C1C] text-[15px] font-normal whitespace-nowrap">
              または
            </span>
            <hr className="flex-grow border-t border-[#E5E5E5]" />
          </div>

          <div className="space-y-[16px]">
            <button className="w-full flex items-center justify-center border-[0.8px] border-[#1E1C1C] rounded-[8px] py-[13px] px-[16px] hover:bg-gray-50 relative text-[15px] font-bold text-[#1E1C1C] cursor-pointer">
              <Image
                src="/assets/svg/icon_google.svg"
                alt="googleIon"
                className="absolute left-4"
                width={20}
                height={20}
              />
              Googleでログイン
            </button>

            <button className="hidden sm:flex w-full items-center justify-center border-[0.8px] border-[#1E1C1C] rounded-[8px] py-[13px] px-[16px] hover:bg-gray-50 relative text-[15px] font-bold text-[#1E1C1C] cursor-pointer">
              <Image
                src="/assets/svg/icon_line.svg"
                alt="lineIon"
                className="absolute left-4"
                width={20}
                height={20}
              />
              LINEでログイン
            </button>

            <button className="hidden sm:flex w-full items-center justify-center border-[0.8px] border-[#1E1C1C] rounded-[8px] py-[13px] px-[16px] hover:bg-gray-50 relative text-[15px] font-bold text-[#1E1C1C] cursor-pointer">
              <Image
                src="/assets/svg/icon_fb.svg"
                alt="lineIon"
                className="absolute left-4"
                width={20}
                height={20}
              />
              Facebookでログイン
            </button>
          </div>

          <p className="text-[15px] mb-[16px] text-[#1E1C1C] border-t-[1px] border-[#E5E5E5] pt-[24px] mt-[56px] font-medium">
            アカウントをお持ちでない方
          </p>

          <Link
            href="/register"
            className="w-full border-[0.8px] border-[#B900B3] text-[#B900B3] py-[13px] px-[16px] font-[700] rounded-[8px] flex items-center justify-center gap-2 hover:bg-white text-[15px] relative"
          >
            <Image
              src="/assets/svg/icon_register.svg"
              alt="スナックサファリ"
              className="absolute left-[16px]"
              width={20}
              height={20}
            />
            新規登録
          </Link>
        </div>
      </main>
    </>
  );
}
