import { useProducts } from 'context/ProductsContext';
import BreadCrumbs from './BreadCrumbs';
import Filter from './Filters';
import {
  ResultCounter,
  ServicesSection,
  ServicesTitle,
} from './Services.styled';
import CategoryItemsList from './CategoryItemsList';

const Services = () => {
  const { allProducts } = useProducts();

  return (
    <ServicesSection>
      <BreadCrumbs />
      <ServicesTitle>Services</ServicesTitle>
      <Filter />
      <ResultCounter>{allProducts.length} results in apparel</ResultCounter>
      <CategoryItemsList allProducts={allProducts} />
    </ServicesSection>
  );
};

export default Services;
