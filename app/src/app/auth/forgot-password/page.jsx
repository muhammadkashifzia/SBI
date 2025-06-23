'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import InputField from '@/components/auth/InputField';
import Image from 'next/image';
// Validation function
const validateForm = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'メールアドレスは必須です';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = '有効なメールアドレスを入力してください';
  }

  if (!values.password) {
    errors.password = 'パスワードは必須です';
  } else if (values.password.length < 6) {
    errors.password = 'パスワードは6文字以上で入力してください';
  }

  return errors;
};

// Main Login Component
const ForgotPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Login attempt:', formData);
      alert('ログインが成功しました！');
    } catch (error) {
      console.error('Login error:', error);
      alert('ログインに失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#016ebb] flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/assets/images/auth-bg.png')",
        backgroundSize: 'cover',
      }}
    >
      <div className="bg-white shadow-2xl p-[30px] w-full max-w-[800px]">
        <Image
          src="/assets/svg/logo.svg"
          width={332}
          height={98}
          className="flex mx-auto h-[98px] mb-[32px]"
          alt='logo'
        />

        <div className="text-center mb-[32px]">
          <h1 className="text-[30px] font-normal text-black mb-[12px]">
            パスワード忘れ
          </h1>
          <p className="text-[#2C3237] text-[16px] font-normal">
            下記よりパスワード変更の手続きを行えます
          </p>
        </div>

        <div onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="メールを入力"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-[4px] shadow-sm text-sm font-medium text-white transition-all duration-200 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#006BA6] hover:bg-[#006BA6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                ログイン中...
              </div>
            ) : (
              'パスワードをリセット'
            )}
          </button>
        </div>
        <div>
            <Link href="/auth/login" className="text-[#475467] flex gap-[8px] justify-center mt-[32px] items-center"><Image src="/assets/svg/back-icon.svg" width={20} height={20} className='w-[20px] height-[20px]' alt='backIcon'/><span>ログインページに戻る</span></Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
