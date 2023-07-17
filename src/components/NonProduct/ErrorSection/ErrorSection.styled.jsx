import styled from '@emotion/styled';
import { ServicesTitle } from 'components/CategoryLanding/Services.styled';
import { Link } from 'react-router-dom';
import { colors, transition } from 'styles/common/vars';
import ErrorImgPath from 'images/bg-error.png';

export const ErrorMain = styled.main`
  background-color: ${colors.desertBg};
`;

export const Section = styled.section`
  padding-top: 27px;
  padding-bottom: 39px;
`;

export const PageTitle = styled(ServicesTitle)`
  padding: 27px 0;
  text-transform: uppercase;

  &::before,
  &&::after {
    opacity: 0.1;
    background-color: ${colors.fontGray};
  }
`;

export const ErrorInfo = styled.section`
  width: 100%;
  padding: 48px 26px;

  border-radius: 6px;
  background-color: ${colors.primaryWhite};

  @media screen and (min-width: 1280px) {
    padding: 72px 106px 64px 0;
    display: flex;
    gap: 106px;
  }
`;

export const OopsWrapper = styled.div`
  width: 100%;
  padding: 130px 0;
  margin-bottom: 24px;

  text-align: right;
  flex-shrink: 0;

  background-image: url(${ErrorImgPath});
  background-size: contain;
  background-position-x: -78px;
  background-repeat: no-repeat;

  @media screen and (min-width: 1280px) {
    width: 368px;
    height: 368px;
    margin-bottom: 0;
  }
`;

export const OopsTitle = styled.p`
  font-size: 76px;
  font-weight: 900;
  color: ${colors.accentGreen};
  @media screen and (min-width: 1280px) {
    font-size: 113px;
  }
`;

export const ErrorTitle = styled.h3`
  margin-bottom: 28px;

  font-size: 24px;
  font-weight: 900;

  color: ${colors.primaryBlack};
`;

export const ErrorDescription = styled.p`
  margin-bottom: 48px;

  color: '#555555';
`;

export const GoHomeLink = styled(Link)`
  display: block;
  margin-bottom: 67px;

  color: ${colors.accentGreen};

  &:hover,
  &:focus {
    color: ${colors.accentBlue};
  }
`;

export const SearchForm = styled.form`
  position: relative;
`;

export const SearchLabel = styled.label`
  display: block;
  font-size: 24px;
  font-weight: 900;

  margin-bottom: 24px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  padding: 14px 24px;

  border-radius: 20px;
  border: 2px solid ${colors.desert};

  &::placeholder {
    text-transform: uppercase;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 13px;
  bottom: 6px;

  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;

  font-size: 22px;

  transition: color ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.accentGreen};
  }
`;
