import React from 'react';
import Image from 'next/image';

function Help() {
  return (
    <div className="sm:px-[16px]">
      <div className="flex items-center justify-center mt-[56px] mb-[48px]">
        <h1 className="font-bold text-[20px] text-[#1E1C1C]">ユーザーヘルプ</h1>
      </div>
      <div className="max-w-[1015px] min-h-[851px] mx-auto bg-white rounded-[2px] shadow pt-[56px] pb-[72px] px-[16px]">
        <div className="flex items-center gap-[10px] justify-center">
          <Image
            src="/assets/svg/icon_faq_1.svg"
            alt="help"
            width={20}
            height={20}
          />
          <h4 className="text-[#B900B3] font-bold">よくある質問</h4>
        </div>
        <div className="mt-[40px] max-w-[375px] mx-auto">
          <div className="flex items-center gap-[16px] mb-[16px] justify-flex-start">
            <Image
              src="/assets/svg/icon_question.svg"
              alt="help"
              width={20}
              height={20}
            />
            <p>ログインできない（ユーザー向け）</p>
          </div>
          <div className="flex items-center gap-[16px] mb-[16px] justify-flex-start">
            <Image
              src="/assets/svg/icon_question.svg"
              alt="help"
              width={20}
              height={20}
            />
            <p>プレミアムプランに登録したい</p>
          </div>
          <div className="flex items-center gap-[16px] mb-[16px] justify-flex-start">
            <Image
              src="/assets/svg/icon_question.svg"
              alt="help"
              width={20}
              height={20}
            />
            <p>あああああああああああああああああああああ</p>
          </div>
          <div className="flex items-center gap-[16px] mb-[16px] justify-flex-start">
            <Image
              src="/assets/svg/icon_question.svg"
              alt="help"
              width={20}
              height={20}
            />
            <p>あああああああああああああああああああああ</p>
          </div>
          <div className="flex items-center gap-[16px] mb-[16px] justify-center">
            <Image
              src="/assets/svg/icon_question.svg"
              alt="help"
              width={20}
              height={20}
            />
            <p>あああああああああああああああああああああ</p>
          </div>
          <div className="flex items-center gap-[16px] mb-[16px] justify-center">
            <Image
              src="/assets/svg/icon_question.svg"
              alt="help"
              width={20}
              height={20}
            />
            <p>あああああああああああああああああああああ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
