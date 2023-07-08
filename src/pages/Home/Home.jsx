import BenefitsContent from 'components/Homepage/BenefitsContent/BenefitsContent';
import CarouselBanner from 'components/Homepage/CarouselBanner/CarouselBanner';
import FeaturedProducts from 'components/Homepage/FeaturedProducts/FeaturedProducts';
import FullImageBanner from 'components/Homepage/FullImageBanner/FullImageBanner';
import PopularItems from 'components/Homepage/PopularItems/PopularItems';

const Home = () => {
  return (
    <main>
      <CarouselBanner />
      <PopularItems />
      <FullImageBanner />
      <FeaturedProducts />
      <BenefitsContent />
    </main>
  );
};

export default Home;
