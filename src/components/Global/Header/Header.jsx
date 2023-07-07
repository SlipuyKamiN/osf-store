import {
  PageHeader,
  PageLogoWrapper,
  UpperLogoText,
  LowerLogoText,
  HeaderWrapper,
} from './Header.styled';
import pageLogo from 'images/page-logo.jpeg';
import pageLogo2x from 'images/page-logo@2x.jpeg';

import Navigation from '../Navigation/Navigation';
import NavigationMobile from '../NavigationMobile/NavigationMobile';
import SelectorsList from './SelectorsList';
import UserBar from './UserBar';

const Header = () => {
  return (
    <PageHeader>
      <HeaderWrapper>
        <NavigationMobile />
        <PageLogoWrapper href="/osf-store">
          <img
            srcSet={`${pageLogo} 63w, ${pageLogo2x} 126w`}
            sizes="65px"
            src={pageLogo}
            width={63}
            height={65}
            alt="page logo"
          />
          <div>
            <UpperLogoText>OSF</UpperLogoText>
            <LowerLogoText>Academy</LowerLogoText>
          </div>
        </PageLogoWrapper>
        <Navigation />
        <SelectorsList />
        <UserBar />
      </HeaderWrapper>
    </PageHeader>
  );
};
export default Header;
