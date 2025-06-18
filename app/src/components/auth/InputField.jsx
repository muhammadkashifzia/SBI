'use client';

import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

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
      {label && (
        <label
          htmlFor={name}
          className="block text-[14px] font-normal text-[#2C3237] mb-[8px]"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}

        <input
          id={name}
          name={name}
          type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`block w-full py-[14px] px-[16px] border border-gray-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 ${
            Icon ? 'pl-10' : ''
          }`}
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

export default InputField;
