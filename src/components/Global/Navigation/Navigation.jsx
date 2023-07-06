import { services } from 'data/services';
import {
  CaretDownIcon,
  CategoriesListWrapper,
  Img,
  Nav,
  NavigationLink,
  NavigationList,
  NavigationListItem,
  ServiceTitle,
  ServicesList,
  ServicesWrapper,
} from './Navigation.styled';
import { Link } from 'react-router-dom';
import navImage from 'images/nav-image.jpeg';
import navImage2x from 'images/nav-image@2x.jpg';
import { useState } from 'react';

const Navigation = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <Nav>
      <NavigationList>
        <NavigationListItem>
          <NavigationLink
            onClick={() => {
              setIsServicesOpen(!isServicesOpen);
            }}
            className={isServicesOpen ? 'active' : ''}
          >
            Services
            <CaretDownIcon className="icon-caret-down" />
          </NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink to="Company">Company</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink to="Library">Library</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink to="ContactUs">Contact us</NavigationLink>
        </NavigationListItem>
      </NavigationList>
      {isServicesOpen && (
        <ServicesWrapper>
          <CategoriesListWrapper>
            <ServiceTitle>Product Categories</ServiceTitle>
            <ServicesList>
              {services.productCategories.map(item => (
                <li key={item}>
                  <Link to={item}>{item}</Link>
                </li>
              ))}
            </ServicesList>
          </CategoriesListWrapper>
          <div>
            <ServiceTitle>Sale</ServiceTitle>
            <ServicesList>
              {services.sale.map(item => (
                <li key={item}>
                  <Link to={item}>{item}</Link>
                </li>
              ))}
            </ServicesList>
          </div>
          <Img
            srcSet={`${navImage} 1x, ${navImage2x} 2x`}
            width={272}
            src={navImage}
            alt="girl"
          />
        </ServicesWrapper>
      )}
    </Nav>
  );
};

export default Navigation;
