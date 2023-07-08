import BenefitsContent from 'components/Homepage/BenefitsContent/BenefitsContent';
import CarouselBanner from 'components/Homepage/CarouselBanner/CarouselBanner';
import FullImageBanner from 'components/Homepage/FullImageBanner/FullImageBanner';
import PopularItems from 'components/Homepage/PopularItems/PopularItems';

const Home = () => {
  return (
    <>
      <CarouselBanner />
      <PopularItems />
      <FullImageBanner />
      <BenefitsContent />
    </>
  );
};

export default Home;
