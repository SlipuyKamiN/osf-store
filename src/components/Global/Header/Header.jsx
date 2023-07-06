import {
  PageHeader,
  PageLogoWrapper,
  UpperLogoText,
  LowerLogoText,
  IconsList,
  SelectList,
  Select,
  IconLink,
  IconCounter,
  CaretDownIcon,
} from './Header.styled';
import pageLogo from 'images/page-logo.jpeg';
import pageLogo2x from 'images/page-logo@2x.jpeg';

import Navigation from '../Navigation/Navigation';
import NavigationMobile from '../NavigationMobile/NavigationMobile';

const Header = () => {
  return (
    <PageHeader>
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
      <SelectList>
        <li>
          <Select name="language">
            <option value="EN">EN</option>
            <option value="UA">UA</option>
          </Select>
          <CaretDownIcon className="icon-caret-down"></CaretDownIcon>
        </li>
        <li>
          <Select name="currency">
            <option value="US">$US</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
          </Select>
          <CaretDownIcon className="icon-caret-down"></CaretDownIcon>
        </li>
      </SelectList>
      <IconsList>
        <li>
          <IconLink to="search" className="icon-search" />
        </li>
        <li>
          <IconLink to="logIn" className="icon-user" />
        </li>
        <li>
          <IconLink to="favourite" className="icon-heart">
            <IconCounter>1</IconCounter>
          </IconLink>
        </li>
        <li>
          <IconLink to="cart" className="icon-bag">
            <IconCounter>1</IconCounter>
          </IconLink>
        </li>
      </IconsList>
    </PageHeader>
  );
};
export default Header;
