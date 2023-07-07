import { useState } from 'react';
import { CopyrightText, FooterWrapper } from './Footer.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';
import FooterBlockTitle from './FooterBlockTitle';
import { footerLinks } from 'data/footerLinks';
import Address from './Address';
import BlockList from './BlockList';
import SocialIconsList from './SocialIconsList';

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { width } = useWindowDimensions();
  const isMobileScreen = width < 1280;

  return (
    <FooterWrapper>
      <div>
        <CopyrightText>
          &#169; Copyright <span>{new Date().getFullYear()}.</span> All rights
          Reserved
        </CopyrightText>
        <FooterBlockTitle
          title={'Contact'}
          isMobileScreen={isMobileScreen}
          isStateOpen={isContactOpen}
          toggleFunc={setIsContactOpen}
        />
        {(!isMobileScreen || isContactOpen) && <Address />}
      </div>
      <BlockList
        title={'Categories'}
        isMobileScreen={isMobileScreen}
        listContent={footerLinks.categories}
      />
      <BlockList
        title={'About'}
        isMobileScreen={isMobileScreen}
        listContent={footerLinks.about}
      />
      <SocialIconsList />
    </FooterWrapper>
  );
};

export default Footer;
