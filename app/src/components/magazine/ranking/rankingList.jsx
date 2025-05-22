import RankingCard from '@/components/magazine/ranking/rankingCard';

const RankingCardItem = [
  {
    id: 1,
    title: 'タイトルが入りますタイトルが入りますタイトルが入り',
    tags: '#ハッシュタグ',
    imageUrl: '/assets/images/magazine.png', // You'll need to add this image to your public folder
  },
  {
    id: 2,
    title: 'タイトルが入りますタイトルが入りますタイトルが入り',
    tags: '#ハッシュタグ',
    imageUrl: '/assets/images/magazine.png',
  },
  {
    id: 3,
    title: 'タイトルが入りますタイトルが入りますタイトルが入り',
    tags: '#ハッシュタグ',
    imageUrl: '/assets/images/magazine.png',
  },
  {
    id: 4,
    name: 'タイトルが入りますタイトルが入りますタイトルが入り',
    tags: '#ハッシュタグ',
    imageUrl: '/assets/images/magazine.png',
  },
  {
    id: 5,
    title:
      'タイトルが入りますタイトルが入りますタイトルが入りタイトルが入りますタイトルが入りますタイトルが入り',
    tags: '#ハッシュタグ',
    imageUrl: '/assets/images/magazine.png',
  },
];

const RankingList = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        {RankingCardItem.map((ranking) => (
          <RankingCard key={ranking.id} {...ranking} />
        ))}
      </div>
    </div>
  );
};

export default RankingList;
