import React from "react";

function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
     <img
        src="/auth/Auth_background.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover z-0"
      />

      {/* Auth container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="bg-[#FFFFFF]  w-full max-w-[800px] max-h-[856px]  p-[30px]  ">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
