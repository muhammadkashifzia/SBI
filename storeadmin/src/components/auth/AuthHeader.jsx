import { FC } from "react";

const AuthHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-[32px]">
      <img
        src="/svg/shared/MainLogo.svg"
        alt="Logo"
        className="mx-auto mb-[32px] h-full max-h-[98px] w-full max-w-[232px]"
      />
      <h2 className="text-[30px] font-normal leading-[38px] text-[#000000] mb-[12px]">
        {title}
      </h2>
      <p className="text-[16px] font-normal leading-[24px] text-[#2C3237]">
        {subtitle}
      </p>
    </div>
  );
};

export default AuthHeader;
