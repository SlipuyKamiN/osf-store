import pageLogo from 'images/page-logo.jpeg';
import pageLogo2x from 'images/page-logo@2x.jpeg';
import navImage from 'images/nav-image.jpeg';
import navImage2x from 'images/nav-image@2x.png';
import {
  MobileHeaderWrapper,
  NavigationListWrapper,
  PageLogoWrapper,
  ToggleNavigationBtn,
} from './NavigationMobile.styled';
import { Link } from 'react-router-dom';
import { services } from 'data/services';
import { useState } from 'react';

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
        X
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
        <NavigationListWrapper>
          <ul>
            <li>
              <Link
                onClick={() => {
                  setIsServicesListOpen(!isServicesListOpen);
                }}
              >
                Services
              </Link>
              {isServicesListOpen && (
                <ul>
                  <li>
                    <Link
                      onClick={() => {
                        setIsCategoriesListOpen(!isCategoriesListOpen);
                      }}
                    >
                      Product categories
                    </Link>
                    {isCategoriesListOpen && (
                      <ul>
                        {services.productCategories.map(item => (
                          <li key={item}>
                            <Link>{item}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link
                      onClick={() => {
                        setIsSaleListOpen(!isSaleListOpen);
                      }}
                    >
                      Sale
                    </Link>
                    <ul>
                      {isSaleListOpen &&
                        services.sale.map(item => (
                          <li>
                            <Link>{item}</Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link>Company</Link>
            </li>
            <li>
              <Link>Library</Link>
            </li>
            <li>
              <Link>Contact us</Link>
            </li>
          </ul>
          <img
            srcSet={`${navImage} 1x, ${navImage2x} 2x`}
            width={272}
            src={navImage}
            alt="girl"
          />
        </NavigationListWrapper>
      )}
    </MobileHeaderWrapper>
  );
};

export default NavigationMobile;
