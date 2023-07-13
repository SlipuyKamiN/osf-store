import Services from 'components/CategoryLanding/Services';
import { ServicesMain } from 'components/CategoryLanding/Services.styled';
import FeaturedProducts from 'components/Homepage/FeaturedProducts/FeaturedProducts';

const CategoryLanding = () => {
  return (
    <ServicesMain>
      <Services />
      <FeaturedProducts />
    </ServicesMain>
  );
};

export default CategoryLanding;
