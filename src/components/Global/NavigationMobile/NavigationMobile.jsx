import pageLogo from 'images/page-logo.jpeg';
import pageLogo2x from 'images/page-logo@2x.jpeg';
import navImage from 'images/nav-image.jpeg';
import navImage2x from 'images/nav-image@2x.jpg';
import {
  MobileHeaderWrapper,
  NavigationLink,
  NavigationList,
  MobileNavigationWrapper,
  PageLogoWrapper,
  ServiceLink,
  ServicesList,
  SubList,
  ToggleNavigationBtn,
} from './NavigationMobile.styled';
import { services } from 'data/services';
import { useState } from 'react';
import { Img } from '../Navigation/Navigation.styled';
import { Link } from 'react-router-dom';
import CaretDownIcon from '../CaretDownIcon';

const NavigationMobile = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isServicesListOpen, setIsServicesListOpen] = useState(false);
  const [isCategoriesListOpen, setIsCategoriesListOpen] = useState(false);
  const [isSaleListOpen, setIsSaleListOpen] = useState(false);

  return (
    <MobileHeaderWrapper>
      <ToggleNavigationBtn
        onClick={() => {
          setIsNavigationOpen(!isNavigationOpen);
        }}
      >
        <span
          className={isNavigationOpen ? 'icon-x-close' : 'icon-drop-closed'}
        ></span>
      </ToggleNavigationBtn>
      <PageLogoWrapper href="/osf-store">
        <img
          srcSet={`${pageLogo} 63w, ${pageLogo2x} 126w`}
          sizes="46px"
          src={pageLogo}
          width={46}
          height={46}
          alt="page logo"
        />
      </PageLogoWrapper>
      {isNavigationOpen && (
        <MobileNavigationWrapper>
          <NavigationList>
            <li>
              <NavigationLink
                onClick={() => {
                  setIsServicesListOpen(!isServicesListOpen);
                }}
              >
                Services
                <CaretDownIcon isOpen={isServicesListOpen} />
              </NavigationLink>
              {isServicesListOpen && (
                <ServicesList>
                  <li>
                    <ServiceLink
                      onClick={() => {
                        setIsCategoriesListOpen(!isCategoriesListOpen);
                      }}
                    >
                      Product categories
                      <CaretDownIcon isOpen={isCategoriesListOpen} />
                    </ServiceLink>
                    {isCategoriesListOpen && (
                      <SubList>
                        {services.productCategories.map(item => (
                          <li key={item}>
                            <Link to={item}>{item}</Link>
                          </li>
                        ))}
                      </SubList>
                    )}
                  </li>
                  <li>
                    <ServiceLink
                      onClick={() => {
                        setIsSaleListOpen(!isSaleListOpen);
                      }}
                    >
                      Sale
                      <CaretDownIcon isOpen={isSaleListOpen} />
                    </ServiceLink>
                    <SubList>
                      {isSaleListOpen &&
                        services.sale.map(item => (
                          <li>
                            <Link to={item}>{item}</Link>
                          </li>
                        ))}
                    </SubList>
                  </li>
                </ServicesList>
              )}
            </li>
            <li>
              <NavigationLink>
                Company
                <CaretDownIcon />
              </NavigationLink>
            </li>
            <li>
              <NavigationLink>
                Library
                <CaretDownIcon />
              </NavigationLink>
            </li>
            <li>
              <NavigationLink>
                Contact us
                <CaretDownIcon />
              </NavigationLink>
            </li>
          </NavigationList>
          <Img
            srcSet={`${navImage} 1x, ${navImage2x} 2x`}
            width={272}
            src={navImage}
            alt="girl"
          />
        </MobileNavigationWrapper>
      )}
    </MobileHeaderWrapper>
  );
};

export default NavigationMobile;
