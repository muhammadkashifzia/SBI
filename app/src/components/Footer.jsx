import Image from 'next/image';
export default function Footer() {
  return (
    <div className="text-gray-800">
      {/* Top Navigation */}
      <nav className="border-b border-t border-[#E9E9E9] py-[20px] md:py-[50px] flex justify-center space-x-[5px] md:space-x-8 text-[13px] md:text-sm flex-wrap">
        <span>グルメ</span>
        <span>|</span>
        <span>ファッション</span>
        <span>|</span>
        <span>グッズ</span>
        <span>|</span>
        <span>アミューズメント</span>
        <span>|</span>
        <span>サービス</span>
      </nav>

      {/* Banner with overlay */}
      <div className="flex flex-col justify-center pt-[20px] md:pt-[41px] w-full max-w-[1137px] mx-auto px-[16px]">
        <div
          className="h-[121px] rounded-[5px] bg-cover bg-no-repeat bg-center relative w-full overflow-hidden "
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/footer-banner.png')`,
            backgroundColor: 'lightgray',
          }}
        >
          <div className="text-center absolute top-1/2 left-[50%] transform -translate-y-1/2 -translate-x-1/2 text-white font-bold text-sm space-y-1">
            <p>掲載無料！</p>
            <p>店舗登録して</p>
            <p>集客に繋げよう</p>
          </div>
        </div>
        {/* Icons Row */}
        <div className="flex justify-center md:justify-end items-center gap-8 text-sm py-4">
          <div className="flex flex-col items-center">
            <span>
              <Image src="/assets/svg/x-icon.svg" width={18} height={16} alt='XIcon' className='w-[18px] h-[16px]'/>
            </span>
            <span>SBI_DC</span>
          </div>
          <div className="flex flex-col items-center">
            <span>
              <Image src="/assets/svg/x-icon.svg" width={18} height={16} alt='XIcon' className='w-[18px] h-[16px]'/>
            </span>
            <span>Bto3</span>
          </div>
          <div className="flex flex-col items-center">
            <span>
              <Image
                src="/assets/svg/discord-icon.svg"
                width={18}
                height={16}
                alt='DiscordIcon' 
                className='w-[18px] h-[16px]'
              />
            </span>
            <span>Bto3</span>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <footer className="text-[13px] md:text-sm">
        <div className="border-y flex-wrap border-[#E9E9E9] flex justify-center space-x-[6px] md:space-x-8 py-[20px] md:py-[50px]">
          <span>企業情報</span>
          <span>|</span>
          <span>利用規約</span>
          <span>|</span>
          <span>プライバシーポリシー</span>
          <span>|</span>
          <span>お問い合わせ</span>
        </div>

        <div className="text-center text-[12px] md:text-xs text-[#2C3237] py-[20px]">
          All rights Reserved <span className="inline-block mx-1">©</span>
          <strong>SBI Company, 2025</strong>
        </div>
      </footer>
    </div>
  );
}
