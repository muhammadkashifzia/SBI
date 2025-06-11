export default function Footer() {
  return (
  <div
        className="h-full mt-[4px] rounded-[5px] bg-cover bg-no-repeat bg-center relative  overflow-hidden  flex flex-col justify-center py-[103px] md:py-[100px] w-full max-w-[1359px] mx-auto px-[16px]"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 81, 158, 0.8), rgba(0, 81, 158, 0.8)), url('/assets/images/instructor-image-02.png')`,
          backgroundColor: 'lightgray',
        }}
      >
        <div>
          <div className="py-[40px] text-center absolute top-1/2 left-[50%] transform -translate-y-1/2 -translate-x-1/2 text-white font-bold text-sm space-y-1">
            <h3 className="font-bold text-[16px] md:text-[30px] leading-[38px] mb-[27px]">
              ※使用方法につきまして質問等がございましたらBto3
              ディスコードの「🎟support」チャンネルよりご連絡ください。
            </h3>
            <p>
              <a
                className="font-normal text-[16px leading-[24px]"
                href="http://discord.gg/bto3"
                target="_blank"
              >
                http://discord.gg/bto3
              </a>
            </p>
          </div>
        </div>
      </div>
  );
}
