import Image from 'next/image';

const products = [
  {
    title: '懐石料理コース 松',
    price: '¥19,000',
    memberPrice: '¥15,000',
    description: 'こちらはおすすめ商品の例です。サービスの本文が含まれます。こちらはおすすめ商品の例です。サービスの本文が含まれます。こちらはおすすめ商品の例として文が含まれています。',
    image: '/assets/images/image02.png', 
  },
  {
    title: '懐石料理コース 竹',
    price: '¥19,000',
    memberPrice: '¥15,000',
    description: 'こちらはおすすめ商品の例です。サービスの本文が含まれます。こちらはおすすめ商品の例です。サービスの本文が含まれます。こちらはおすすめ商品の例として文が含まれています。',
    image: '/assets/images/image02.png',
  },
  {
    title: '懐石料理コース 梅',
    price: '¥19,000',
    memberPrice: '¥15,000',
    description: 'こちらはおすすめ商品の例です。サービスの本文が含まれます。こちらはおすすめ商品の例です。サービスの本文が含まれます。こちらはおすすめ商品の例として文が含まれています。',
    image: '/assets/images/image02.png',
  },
];

export default function RecommendedProducts() {
  return (
    <div className='mt-[91px] md:mt-[100px]'>
      <h2 className="text-[28px] font-bold mb-[14px] text-[#2C3237]">おすすめの商品・サービス</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[23px]">
        {products.map((product, index) => (
          <div key={index} className="rounded-[5px] bg-[#F7F7F7]">
            <div className="relative w-full h-48 rounded-t-[5px]">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-[5px]"
              />
            </div>
            <div className='pt-[20px] px-[15px] pb-[15px] md:pb-[39px]'>
            <h3 className="font-bold text-[20px] mb-[15px] text-[#2C3237]">{product.title}</h3>
            <p className="text-[16px] text-[#2C3237] mb-[15px] font-medium">価格：{product.price}（会員価格：{product.memberPrice}）</p>
            <p className="text-[16px] text-black font-normal">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
