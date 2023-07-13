import { useProducts } from 'context/ProductsContext';
import BreadCrumbs from './BreadCrumbs';
import Filter from './Filters';
import { ServicesTitle } from './Services.styled';
import CategoryItemsList from './CategoryItemsList';

const Services = () => {
  const { allProducts } = useProducts();

  return (
    <>
      <BreadCrumbs padding={['24px 0 34px', '30px 0']} />
      <ServicesTitle>Services</ServicesTitle>
      <Filter allProducts={allProducts} />
      <CategoryItemsList allProducts={allProducts} />
    </>
  );
};

export default Services;
