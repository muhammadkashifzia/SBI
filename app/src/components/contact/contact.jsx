'use client';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

function ContactForm() {
  const [step, setStep] = useState(0);
  const steps = ['入力', '確認', '完了'];

  const formik = useFormik({
    initialValues: {
      attribute: '',
      nameKanji: '',
      nameKana: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      attribute: Yup.string().required('必須項目です'),
      nameKanji: Yup.string().required('必須項目です'),
      nameKana: Yup.string().required('必須項目です'),
      email: Yup.string()
        .email('無効なメールアドレスです')
        .required('必須項目です'),
      message: Yup.string(),
    }),
    onSubmit: () => setStep(1),
  });

  const handleFinalSubmit = () => {
    // You can handle your backend logic here
    setStep(2);
  };

  const handleBack = () => setStep((prev) => prev - 1);
  const handleReset = () => {
    formik.resetForm();
    setStep(0);
  };

  const getInputBorder = (field) => {
    return formik.touched[field] && formik.errors[field]
      ? 'border-1 border-red-500'
      : 'border-1 border-[#EFEFEF]';
  };

  return (
    <div className="bg-[#FAF7F5] pt-[40px] min-h-screen pb-[100px] px-[16px]">
      {/* Step 0: 入力 */}
      {step === 0 && (
        <div>
          <h2 className="text-[20px] font-bold text-center mb-[32px] text-[#1E1C1C]">
            お問い合わせ
          </h2>
          <p className="text-center text-[15px] mb-[23px] max-w-[764px] mx-auto text-[#1E1C1C] font-[700]">
            <span className="font-bold underline">よくある質問</span>
            をご確認の上、解決しない場合は、以下のフォームよりお問い合わせください。
            お問い合わせ内容によりましては、ご返信までお時間をいただく場合がございますので、予めご了承ください。
          </p>
          <Link
            href="/"
            className="text-[#B900B3] text-center font-medium text-[15px] mb-[40px] block underline"
          >
            ＜スナック店舗関係者の方＞ 店舗登録の申請はこちら
          </Link>

          <div className="">
            <div className="max-w-[1015px] mx-auto bg-white rounded-lg shadow pt-[56px] pb-[72px] px-[20px] md:px-[100px]">
              <div className="flex justify-center mb-8 gap-[10px] md:gap-[32px]">
                {steps.map((label, idx) => {
                  const isActive = idx === step;
                  return (
                    <div
                      key={label}
                      className="flex items-center gap-[8px] md:gap-[32px]"
                    >
                      <div
                        className={`w-[60px] md:w-[80px] h-[60px] md:h-[80px] rounded-full font-bold flex items-center justify-center border text-[16px] ${
                          isActive
                            ? 'bg-black text-white'
                            : 'border-black text-black'
                        }`}
                      >
                        {label}
                      </div>
                      {idx < steps.length - 1 && <FaAngleRight />}
                    </div>
                  );
                })}
              </div>

              <form onSubmit={formik.handleSubmit} className="space-y-[32px]">
                {/* 属性 */}
                <div>
                  <label className=" font-bold mb-[7px] relative flex gap-[4px] text-[16px]">
                    ご入力者の属性
                    <span className="text-[#FA5A29] w-[6px] h-[6px] inline-block rounded-full bg-[#FA5A29]"></span>
                  </label>
                  <div className="relative w-full">
                    <select
                      name="attribute"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.attribute}
                      className={`w-full h-[48px] appearance-none rounded-[5px] pl-[15px] md:pl-[31px] md:pr-[24px] pt-[14px] pb-[17px] bg-[#EFEFEF] focus:outline-none focus:ring-2 focus:ring-[#B900B3] text-[#1E1C1C] text-[14px] font-normal ${getInputBorder('attribute')}`}
                    >
                      <option value="">選択してください</option>
                      <option value="一般ユーザー">一般ユーザー</option>
                      <option value="スナック店舗関係者">
                        スナック店舗関係者
                      </option>
                      <option value="その他">その他</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-[10px] md:right-[24px] flex items-center">
                      <Image
                        src="/assets/svg/icon_down_arrow.svg"
                        alt="arrow"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                  {formik.touched.attribute && formik.errors.attribute && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.attribute}
                    </p>
                  )}
                </div>

                {/* 名前 */}
                <div>
                  <label className="font-bold mb-[7px] flex gap-[4px] text-[16px]">
                    お名前
                    <span className="text-[#FA5A29] w-[6px] h-[6px] inline-block rounded-full bg-[#FA5A29]"></span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px]">
                    <div>
                      <input
                        type="text"
                        name="nameKanji"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nameKanji}
                        className={`w-full h-[48px] rounded-[5px] px-[15px] md:px-[32px] pt-[14px] pb-[17px] bg-[#EFEFEF] focus:outline-none focus:ring-2 focus:ring-[#B900B3] text-[14px] font-normal ${getInputBorder('nameKanji')}`}
                        placeholder="例）田中 花子（漢字）"
                      />
                      {formik.touched.nameKanji && formik.errors.nameKanji && (
                        <p className="text-red-500 text-sm mt-1">
                          {formik.errors.nameKanji}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="nameKana"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nameKana}
                        className={`w-full h-[48px] rounded-[5px] px-[15px] md:px-[32px] pt-[14px] pb-[17px] bg-[#EFEFEF] focus:outline-none focus:ring-2 focus:ring-[#B900B3] text-[14px] font-normal ${getInputBorder('nameKana')}`}
                        placeholder="例）タナカ ハナコ（カナ）"
                      />
                      {formik.touched.nameKana && formik.errors.nameKana && (
                        <p className="text-red-500 text-sm mt-1">
                          {formik.errors.nameKana}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* メール */}
                <div>
                  <label className=" font-bold mb-[7px] flex gap-[4px] text-[16px]">
                    メールアドレス
                    <span className="text-[#FA5A29] w-[6px] h-[6px] inline-block rounded-full bg-[#FA5A29]"></span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`w-full h-[48px] max-w-full md:max-w-[405px] rounded-[5px] px-[15px] md:px-[32px] pt-[14px] pb-[17px] bg-[#EFEFEF] focus:outline-none focus:ring-2 focus:ring-[#B900B3] text-[14px] font-normal ${getInputBorder('email')}`}
                    placeholder="例）example@email.com"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                {/* メッセージ */}
                <div className="mb-[24px]">
                  <label className="block font-bold mb-[7px] text-[16px]">
                    お問い合わせ内容
                  </label>
                  <textarea
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    className="w-full border-[#EFEFEF] rounded-[5px] px-[15px] md:px-[32px] py-[24px] min-h-[200px] bg-[#EFEFEF] focus:outline-none focus:ring-2 focus:ring-[#B900B3] text-[14px] font-normal"
                    placeholder="お問い合わせ内容をご記入ください。"
                  />
                </div>

                <p className="text-[14px] text-[#1E1C1C] mb-[56px] font-normal">
                  ※お客様よりいただいた個人情報は
                  <a href="#" className="text-[#02abba] underline">
                    プライバシーポリシー
                  </a>
                  の内容で取り扱わせていただきます。
                </p>

                <div className="text-center">
                  <button
                    type="submit"
                    className="cursor-pointer relative px-10 py-2 border-1 border-[#B900B3] text-[#B900B3]  rounded-full hover:bg-pink-50 transition flex justify-center items-center w-full max-w-[240px] h-[56px] mx-auto text-[14px] font-bold"
                  >
                    確認 <span className="absolute right-[15px]">→</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* Step 1: 確認 */}
      {step === 1 && (
        <div>
          <h2 className="text-[20px] font-bold text-center mb-[32px] text-[#1E1C1C]">
            お問い合わせ
          </h2>
          <p className="text-center text-[15px] mb-[23px] max-w-2xl mx-auto text-[#1E1C1C]">
            <span className="font-bold underline">よくある質問</span>
            をご確認の上、解決しない場合は、以下のフォームよりお問い合わせください。
            お問い合わせ内容によりましては、ご返信までお時間をいただく場合がございますので、予めご了承ください。
          </p>
          <Link
            href="/"
            className="text-[#B900B3] text-center text-sm mb-[40px] block"
          >
            ＜スナック店舗関係者の方＞ 店舗登録の申請はこちら
          </Link>

          <div className="">
            <div className="max-w-[1015px] mx-auto bg-white rounded-lg shadow pt-[56px] pb-[72px] px-[20px] md:px-[100px]">
              {/* Step Indicator */}
              <div className="flex justify-center mb-8 gap-[10px] md:gap-[32px]">
                {steps.map((label, idx) => {
                  const isActive = idx === step;
                  return (
                    <div
                      key={label}
                      className="flex items-center gap-[8px] md:gap-[32px]"
                    >
                      <div
                        className={`w-[60px] md:w-[80px] h-[60px] md:h-[80px]  rounded-full flex items-center justify-center border text-[16px] ${
                          isActive
                            ? 'bg-black text-white'
                            : 'border-black text-black'
                        }`}
                      >
                        {label}
                      </div>
                      {idx < steps.length - 1 && <FaAngleRight />}
                    </div>
                  );
                })}
              </div>
              <div className="mt-[64px]">
                <p className="text-center text-[#111] text-[16px] mb-[56px] font-[400]">
                  内容に間違いがなければ送信をクリックしてください。
                </p>
                <ul className="text-sm space-y-[40px]">
                  <li>
                    <h6 className="mb-[16px] text-[#111111] font-bold text-[16px]">
                      名前
                    </h6>
                    <p className="text-[#3F3F3F] text-[14px] font-[500]">
                      {formik.values.nameKanji} / {formik.values.nameKana}
                    </p>
                  </li>
                  <li>
                    <h6 className="mb-[16px] text-[#111111] font-bold text-[16px]">
                      メールアドレス
                    </h6>
                    <p className="text-[#3F3F3F] text-[14px]">
                      {formik.values.email}
                    </p>
                  </li>
                  <li>
                    <h6 className="mb-[16px] text-[#111111] font-bold text-[16px]">
                      お問い合わせ内容
                    </h6>
                    <p className="text-[#3F3F3F] text-[14px] leading-[24px]">
                      {formik.values.message}
                    </p>
                  </li>
                </ul>

                <div className="flex justify-center flex-col gap-[24px] mt-[56px]">
                  <button
                    onClick={handleFinalSubmit}
                    className="cursor-pointer  relative px-10 py-2 border-1 border-[#B900B3] text-[#B900B3] font-bold rounded-full hover:bg-pink-50 transition flex justify-center items-center w-full max-w-[240px] h-[56px] mx-auto"
                  >
                    送信 <span className="absolute right-[15px]">→</span>
                  </button>
                  <button
                    onClick={handleBack}
                    className="cursor-pointer relative px-10 py-2 border-1 border-[#CECECE] text-[#CECECE] font-bold rounded-full hover:bg-[#CECECE] hover:text-[#333] transition flex justify-center items-center w-full max-w-[240px] h-[56px] mx-auto"
                  >
                    <span className="absolute left-[15px]">←</span> 修正
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Step 2: 完了 */}
      {step === 2 && (
        <div className="bg-[#FAF7F5] pt-[40px] min-h-screen">
          <div>
            <div className="max-w-[1015px] mx-auto bg-white rounded-lg shadow pt-[56px] pb-[72px] px-[20px] md:px-[100px]">
              <div className="text-center flex flex-col items-center">
                <h3 className="text-[#B900B3] font-extrabold text-[24px] mb-[32px]">
                  送信完了
                </h3>
                <hr className="w-6 border-t-2 border-[#B900B3] mx-auto mb-[32px]" />
                <h4 className="font-[900] border-[#B900B3] text-[#B900B3] text-[24px]  mb-[24px]">
                  お問い合わせありがとうございました
                </h4>
                <div className="relative w-full pt-[24px] pb-[40px]">
                  <p className="text-[16px] font-normal text-[#000000] max-w-[580px] leading-relaxed mx-auto z-10 ">
                    この度はスナックサファリにお問い合わせ頂き、誠にありがとうございます。
                    <br />
                    内容を確認させて頂いた上、2〜3営業日以内に担当よりご連絡致します。
                  </p>
                  <Image
                    src="/assets/svg/thankyou.svg"
                    alt="Thank you"
                    width={150}
                    height={150}
                    className="w-full absolute top-[1%] left-[50%] -translate-x-1/2 "
                  />
                </div>
                <div className="mb-[40px] mt-[20px]">
                  <Image
                    src="/assets/svg/thanks_girl.svg"
                    alt="Thank you"
                    width={142}
                    height={139}
                    className="w-[142px] h-[139]"
                  />
                </div>
                <Link
                  href="/"
                  className="text-[14px] font-medium relative px-10 py-2 border-1 border-[#B900B3] text-[#B900B3] rounded-full hover:bg-pink-50 transition flex justify-center items-center w-full max-w-[240px] h-[56px] mx-auto"
                >
                  TOPへ戻る <span className="absolute right-[15px]">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
