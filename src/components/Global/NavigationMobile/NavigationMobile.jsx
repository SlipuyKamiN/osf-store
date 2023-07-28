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
  ToggleNavigationBtn,
} from './NavigationMobile.styled';
import { useState } from 'react';
import { Img } from '../Navigation/Navigation.styled';
import CaretDownIcon from '../CaretDownIcon';
import ServicesSubList from './ServicesSubList';

const NavigationMobile = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

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
            <li key="Services">
              <ServicesSubList />
            </li>
            <li key="Company">
              <NavigationLink to="company">
                Company
                <CaretDownIcon />
              </NavigationLink>
            </li>
            <li key="Library">
              <NavigationLink to="library">
                Library
                <CaretDownIcon />
              </NavigationLink>
            </li>
            <li key="Contact us">
              <NavigationLink to="contact-us">
                Contact us
                <CaretDownIcon />
              </NavigationLink>
            </li>
            <li key="countdown">
              <NavigationLink to="countdown">
                Release
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
