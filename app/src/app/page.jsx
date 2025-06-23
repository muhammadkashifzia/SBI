import Banner from '@/components/home/banner';

export default function Home() {
  return (
    <main>
      <Banner
      title1="全国で掲載店舗拡大中"
      title2="お得に使用できる店舗を探そう"
      buttonText="掲載店舗を探す"
      backgroundImage="/assets/images/banner.png"
      bannerLinkUrl="/home"
    />
     <Banner
      title1="対象のトークン/NFTを保有して"
      title2="日常生活を豊かにしよう"
      buttonText="ユーザ向け使用方法"
      backgroundImage="/assets/images/bannertwo.png"
      bannerLinkUrl="/about"
    />
     <Banner
      title1="無料で店舗登録"
      title2="店舗の魅力を伝えて集客を行おう"
      buttonText="店舗向け使用方法 & 無料登録"
      backgroundImage="/assets/images/bannerthree.png"
      bannerLinkUrl="/shop"
    />
    </main>
  );
}
