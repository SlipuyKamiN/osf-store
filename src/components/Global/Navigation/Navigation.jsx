import { services } from 'data/services';
import {
  Nav,
  NavigationLink,
  NavigationList,
  NavigationListItem,
  ServicesWrapper,
} from './Navigation.styled';
import { Link } from 'react-router-dom';
import navImage from 'images/nav-image.jpeg';
import navImage2x from 'images/nav-image@2x.png';
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
          >
            Services
          </NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink to="ErrorPage">Company</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink to="ErrorPage">Library</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink to="ErrorPage">Contact us</NavigationLink>
        </NavigationListItem>
      </NavigationList>
      {isServicesOpen && (
        <ServicesWrapper>
          <div>
            <h3>Product Categories</h3>
            <ul>
              {services.productCategories.map(item => (
                <li key={item}>
                  <Link>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Sale</h3>
            <ul>
              {services.sale.map(item => (
                <li key={item}>
                  <Link>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <img
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
