import { useEffect } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
export default function SignInModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#262d33] bg-opacity-70">
      <div className="relative w-full max-w-[600px] rounded-2xl bg-black px-[100px] pt-[10px] pb-[100px] shadow-lg">
        <button
          className="absolute top-4 left-4 text-white hover:text-gray-400 cursor-pointer"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <div className="flex justify-center mb-6">
         <Image src="/assets/svg/x-white-icons.svg" alt="Logo" width={38} height={38} className="w-[38px] h-[38px]" />
        </div>
        <h2 className="text-white text-[32px] font-bold text-left mb-6">
          Sign in to X
        </h2>
        <button className="flex items-center justify-center w-full gap-2 rounded-full bg-white text-black py-2 font-medium mb-4 hover:bg-gray-100 transition">
          <img src="/assets/images/google_icon.png" alt="Google" className="w-[22px] h-[22px]" />
          Sign in with Google
        </button>
        <button className="flex items-center justify-center w-full gap-2 rounded-full bg-white text-black py-2 font-medium mb-4 hover:bg-gray-100 transition">
              <img src="/assets/svg/apple-icon.svg" alt="Google" className="w-[22px] h-[22px]" />
          Sign in with Apple
        </button>
        <div className="flex items-center my-4 text-gray-600">
          <div className="flex-grow border-t border-gray-700" />
          <span className="mx-4 text-sm text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-700" />
        </div>
        <input
          type="text"
          placeholder="Phone, email, or username"
          className="w-full bg-black border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-white mb-4"
        />
        <button className="w-full bg-white text-black font-bold py-2 rounded-full hover:bg-gray-100 transition mb-[20px] cursor-pointer">
          Next
        </button>
        <button className="w-full border border-gray-600 text-white font-bold py-2 rounded-full hover:bg-gray-800 transition">
          Forgot password?
        </button>
        <p className="text-left text-sm text-gray-500 mt-[40px]">
          Don’t have an account?
          <a href="#" className="text-[#006BA6] hover:underline ml-[5px]">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
