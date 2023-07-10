import BreadCrumbs from './BreadCrumbs';
import Filter from './Filters';
import { ServicesSection, ServicesTitle } from './Services.styled';

const Services = () => {
  return (
    <ServicesSection>
      <BreadCrumbs />
      <ServicesTitle>Services</ServicesTitle>
      <Filter />
    </ServicesSection>
  );
};

export default Services;
