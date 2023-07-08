import BannerDescription from 'components/Homepage/CarouselBanner/BannerDescription';
import ItemCard from 'components/Homepage/PopularItems/ItemCard';
import bannerLeft from 'images/carousel-1.png';
import bannerCenter from 'images/carousel-2.jpg';
import bannerRight from 'images/carousel-3.jpg';

export const carouselBannerImages = [
  {
    original: bannerLeft,
    description: <BannerDescription contentAlign={'left'} />,
  },
  {
    original: bannerCenter,
    description: <BannerDescription contentAlign={'center'} />,
  },
  {
    original: bannerRight,
    description: <BannerDescription contentAlign={'right'} />,
  },
];

export const popularItemsMobile = [
  {
    original: require('images/item1.png'),
    description: (
      <ItemCard
        title={'Kristina Dam Oak Table With White Marble Top'}
        price={356}
      />
    ),
  },
  {
    original: require('images/item2.png'),
    description: (
      <ItemCard
        title={'EAMES x Cast + Crew - Custom Powder Coated'}
        price={1276}
      />
    ),
  },
  {
    original: require('images/item3.png'),
    description: (
      <ItemCard title={'Activate Facial Mask and Charcoal Soap'} price={1986} />
    ),
  },
  {
    original: require('images/item4.png'),
    description: (
      <ItemCard
        title={'Vitra Cork Stool B, Cork - Design Within Reach'}
        price={50}
      />
    ),
  },
  {
    original: require('images/item5.png'),
    description: (
      <ItemCard title={'Hay - About A Lounge Chair AAL 93'} price={98} />
    ),
  },
];
