"use client";
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, Tag } from 'lucide-react';
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

// Input Field Component
const InputField = ({ 
  label, 
  name, 
  type = 'text', 
  placeholder, 
  icon: Icon,
  showPasswordToggle = false,
  showPassword = false,
  onTogglePassword = () => {},
  value,
  onChange,
  error,
  ...props 
}) => {
  return (
    <div className="mb-[20px]">
      <label htmlFor={name} className="block text-[14px] font-normal text-[#2C3237] mb-[8px]">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="block w-full px-[16px] py-[14px] border border-gray-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
          {...props}
        />
        {showPasswordToggle && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={onTogglePassword}
          >
            {showPassword ? (
            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            ) : (
               <EyeOff className="h-5 w-5 text-[#2C3237] hover:text-gray-600" />
            )}
          </button>
        )}
      </div>
      {error && <div className="mt-1 text-sm text-red-600">{error}</div>}
    </div>
  );
};



// Main Login Component
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
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
      await new Promise(resolve => setTimeout(resolve, 1500));
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
    <div className="min-h-screen bg-[#016ebb] flex items-center justify-center p-4"  style={{
    backgroundImage: "url('/assets/images/auth-bg.png')",
    backgroundSize: 'cover'
  }}>
      <div className="bg-white shadow-2xl p-[30px] w-full max-w-[800px]">
       <Image src="/assets/svg/logo.svg" width={332} height={98} className='flex mx-auto h-[98px] mb-[32px]'/>
        
        <div className="text-center mb-[32px]">
          <h1 className="text-[30px] font-normal text-black mb-[12px]">ログインページ</h1>
          <p className="text-[#2C3237] text-[16px] font-normal">下記よりログイン情報をご入力ください</p>
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

          <InputField
            label="パスワード"
            name="password"
            placeholder="••••••••"
            showPasswordToggle={true}
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
            value={formData.password}
            onChange={handleInputChange}
            error={errors.password}
          />

          <div className="flex">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-[#014F8B] underline hover:text-blue-500 transition-colors duration-200"
              >
                パスワードをお忘れの場合
              </a>
            </div>
          </div>

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
              'ログイン'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;