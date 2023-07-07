import { useState } from 'react';
import {
  AddressText,
  BlockList,
  CategoriesList,
  ContactIconLink,
  ContactIconsList,
  ContactLink,
  ContactList,
  CopyrightText,
  FooterWrapper,
  ListLink,
} from './Footer.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';
import FooterBlockTitle from './FooterBlockTitle';
import { footerLinks } from 'data/footerLinks';

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
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
        {(!isMobileScreen || isContactOpen) && (
          <>
            <AddressText>
              Headquarters: <br />
              5600, Blvd, des Galeries, Bur 530 Quebec, Quebec G2K 2H6
            </AddressText>
            <ContactList>
              <li>
                <ContactLink href="mailto:contact@osf-global.com">
                  contact@osf-global.com
                </ContactLink>
              </li>
              <li>
                <ContactLink href="tel:+18885484344">
                  +1 (888) 548-4344
                </ContactLink>
              </li>
            </ContactList>
          </>
        )}
      </div>
      <div>
        <FooterBlockTitle
          title={'Categories'}
          isMobileScreen={isMobileScreen}
          isStateOpen={isCategoriesOpen}
          toggleFunc={setIsCategoriesOpen}
        />
        {(!isMobileScreen || isCategoriesOpen) && (
          <CategoriesList>
            {footerLinks.categories.map(category => (
              <li key={category}>
                <ListLink to={category}>{category}</ListLink>
              </li>
            ))}
          </CategoriesList>
        )}
      </div>
      <div>
        <FooterBlockTitle
          title={'About'}
          isMobileScreen={isMobileScreen}
          isStateOpen={isAboutOpen}
          toggleFunc={setIsAboutOpen}
        />
        {(!isMobileScreen || isAboutOpen) && (
          <BlockList>
            {footerLinks.about.map(link => (
              <li key={link}>
                <ListLink to={link}>{link}</ListLink>
              </li>
            ))}
          </BlockList>
        )}
      </div>
      <div>
        <ContactIconsList>
          {footerLinks.socialsLinks.map(social => (
            <li key={social.name}>
              <ContactIconLink
                href={social.url}
                className={social.iconName}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{social.name}</span>
              </ContactIconLink>
            </li>
          ))}
        </ContactIconsList>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
