import CaretDownIcon from '../CaretDownIcon';
import { BlockTitle } from './Footer.styled';

const FooterBlockTitle = ({
  isMobileScreen,
  isStateOpen,
  title,
  toggleFunc,
}) => {
  return isMobileScreen ? (
    <BlockTitle
      onClick={() => {
        toggleFunc(!isStateOpen);
      }}
    >
      {title}
      <CaretDownIcon isOpen={isStateOpen} />
    </BlockTitle>
  ) : (
    <BlockTitle>{title}</BlockTitle>
  );
};

export default FooterBlockTitle;
