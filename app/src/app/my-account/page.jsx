'use client';
import { useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import Link from 'next/link';

export default function MyAccount() {
  const [profileImage, setProfileImage] = useState(
    '/assets/images/demo-profile.png',
  );
  const fileInputRef = useRef(null);
  const [enabled, setEnabled] = useState(true);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      gender: '',
      birthdate: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('名前は必須です'),
      gender: Yup.string().required('性別は必須です'),
      birthdate: Yup.string().required('生年月日は必須です'),
    }),
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    },
  });

  return (
    <div className="min-h-screen px-[16px] pt-[16px] flex-col max-w-[780px] mx-auto pb-[72px]">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className="bg-white rounded-[10px]  px-[16px] pt-[16px] pb-[24px] w-full">
            <h2 className="text-[#B900B3] text-[16px] font-[700] mb-[24px] flex items-center gap-2">
              <Image
                src="/assets/svg/icon_edit03.svg"
                alt="Profile"
                width={18}
                height={18}
                className="object-cover"
              />
              プロフィール設定
            </h2>

            <div className="flex flex-col justify-flex-start mb-[32px] items-center">
              <div className="w-[140] h-[140] rounded-full overflow-hidden mb-[8px]">
                <Image
                  src={profileImage}
                  alt="Profile"
                  width={140}
                  height={140}
                  className="object-cover"
                />
              </div>
              <button
                className="text-[12px] font-medium text-[#1E1C1C] underline text-left cursor-pointer"
                onClick={triggerFileInput}
                type="button"
              >
                アイコン変更
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleImageChange}
              />
            </div>

            {/* 名前 */}
            <div className="w-full mb-[24px]">
              <label className="block text-[#808080] text-[12px] font-[400] mb-1">
                名前 / ニックネーム
              </label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className={`w-full px-4 py-2 border-[3px] border-[#EEEEEE] rounded-[5px] text-lg focus:outline-none   focus:border-[#B900B3] ${
                  formik.touched.name && formik.errors.name
                    ? 'border-red-500'
                    : 'border-[#BBBBBB]'
                } focus:outline-none    focus:border-[#B900B3]`}
                placeholder="田中 太郎"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            {/* 性別 */}
            <div className="mb-[24px]">
              <label className="text-[12px] text-[#808080] font-[400]">
                性別
              </label>
              <select
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
                className={`w-full px-4 py-2 border-[3px] border-[#EEEEEE] rounded-[5px] text-lg focus:outline-none  focus:border-[#B900B3] ${
                  formik.touched.gender && formik.errors.gender
                    ? 'border-red-500'
                    : 'border-[#BBBBBB]'
                } focus:outline-none    focus:border-[#B900B3]`}
              >
                <option value="">未設定</option>
                <option value="男性">男性</option>
                <option value="女性">女性</option>
                <option value="その他">その他</option>
              </select>
              {formik.touched.gender && formik.errors.gender && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.gender}
                </p>
              )}
            </div>

            {/* 生年月日 */}
            <div>
              <label className="text-[12px] text-[#808080] font-[400]">
                生年月日
              </label>
              <select
                name="birthdate"
                onChange={formik.handleChange}
                value={formik.values.birthdate}
                className={`w-full px-4 py-2 border-[3px] border-[#EEEEEE] rounded-[5px] text-lg focus:outline-none  focus:border-[#B900B3] ${
                  formik.touched.birthdate && formik.errors.birthdate
                    ? 'border-red-500'
                    : 'border-[#BBBBBB]'
                } focus:outline-none    focus:border-[#B900B3]`}
              >
                <option value="">01月01日</option>
                <option value="男性">02月02日</option>
                <option value="女性">03月03日</option>
              </select>

              {formik.touched.birthdate && formik.errors.birthdate && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.birthdate}
                </p>
              )}
            </div>
          </div>

          {/* メール通知 */}
          <div className="bg-white  px-[16px]  pt-[16px] pb-[39px] w-full  rounded-[10px] mt-[16px]">
            <h2 className="text-[#B900B3] text-[16px] font-normal mb-[24px] flex items-center gap-2">
              <Image
                src="/assets/svg/icon_login02.svg"
                alt="Profile"
                width={18}
                height={18}
                className="object-cover"
              />
              プロフィール設定
            </h2>
            <div className="pb-[32px] border-b border-[#EAEAEA]">
              <p className="mb-[13px] text-[#808080] font-bold text-[12px]">
                メールアドレス
              </p>
              <p className="mb-[8px] text-[#1E1C1C] text-[15px] font-normal">
                snack-safari@example.com
              </p>
              <Link href="/" className="text-[#1E1C1C] text-[14px] font-normal">
                メールアドレスの変更はこちら
              </Link>
            </div>
            <div className="flex items-end justify-between mt-[32px]">
              <div>
                <p className="text-[#808080] font-bold text-[12px]">
                  メール通知
                </p>
                <label className="text-[14px] text-[#1E1C1C] font-normal">
                  お得なキャンペーンやイベント情報
                </label>
              </div>
              <button
                onClick={() => setEnabled(!enabled)}
                type="button"
                className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
                  enabled ? 'bg-[#B900B3]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                    enabled ? 'translate-x-6' : 'translate-x-0'
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#B900B3] text-[16px] font-bold w-full flex items-center justify-center text-white rounded-[10px] h-[50px] mt-[40px] max-w-[750px] py-[13px] relative"
        >
          更新する
          <svg
            className="absolute right-[16px] sm:hidden"
            width="8"
            height="15"
            viewBox="0 0 8 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.92578 7.29712L0.999383 1.00032"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6.92578 7.48547L0.999384 13.7823"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <p className="mt-[48px] mb-[56px] text-[#888888] text-center text-[14px] border-b-2 border-[#E9E9E9] pb-[72px] font-[400]">
          スナックサファリの退会は
          <Link href="/withdraw" className="underline">
            こちら
          </Link>
        </p>
      </form>
      <div className="mt-[24px]">
        <h2 className="text-[#B900B3] text-[16px] font-bold mb-[16px] flex items-center gap-2">
          <Image
            alt="location"
            loading="lazy"
            width="16"
            height="16"
            className="object-cover"
            src="/assets/svg/icon_search.svg"
          />
          都道府県からスナックを探す
        </h2>
        <div className="flex flex-wrap gap-[12px] mb-[28px] items-center">
          <div className="min-w-[110px]">
            <h6 className="text-[#1E1C1C] font-bold text-[14px]">
              北海道・東北
            </h6>
          </div>
          <div className="flex flex-wrap gap-[12px]">
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              北海道のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              青森県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              岩手県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              宮城県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              秋田県のスナック
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-[12px] mb-[28px] items-center">
          <div className="min-w-[110px]">
            <h6 className="text-[#1E1C1C] font-bold text-[14px]">関東</h6>
          </div>
          <div className="flex flex-wrap gap-[12px]">
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              北海道のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              青森県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              岩手県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              宮城県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              秋田県のスナック
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-[12px] mb-[28px] items-center">
          <div className="min-w-[110px]">
            <h6 className="text-[#1E1C1C] font-bold text-[14px]">
              北陸・甲信越
            </h6>
          </div>
          <div className="flex flex-wrap gap-[12px]">
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              北海道のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              青森県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              岩手県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              宮城県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              秋田県のスナック
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-[12px] mb-[28px] items-center">
          <div className="min-w-[110px]">
            <h6 className="text-[#1E1C1C] font-bold text-[14px]">東海</h6>
          </div>
          <div className="flex flex-wrap gap-[12px]">
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              北海道のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              青森県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              岩手県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              宮城県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              秋田県のスナック
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-[12px] mb-[28px] items-center">
          <div className="min-w-[110px]">
            <h6 className="text-[#1E1C1C] font-bold text-[14px]">近畿</h6>
          </div>
          <div className="flex flex-wrap gap-[12px]">
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              北海道のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              青森県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              岩手県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              宮城県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              秋田県のスナック
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-[12px] mb-[28px] items-center">
          <div className="min-w-[110px]">
            <h6 className="text-[#1E1C1C] font-bold text-[14px]">中国・四国</h6>
          </div>
          <div className="flex flex-wrap gap-[12px]">
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline" >
              北海道のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              青森県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              岩手県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              宮城県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              秋田県のスナック
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-[12px] mb-[28px] items-center">
          <div className="min-w-[110px]">
            <h6 className="text-[#1E1C1C] font-bold text-[14px]">九州・沖縄</h6>
          </div>
          <div className="flex flex-wrap gap-[12px]">
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              北海道のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              青森県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              岩手県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              宮城県のスナック
            </Link>
            <Link
              href="/"
              className="text-[#1E1C1C] font-normal text-[13px] md:text-[14px] underline"
            >
              秋田県のスナック
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
