import {
  CardDescription,
  CardFollowLink,
  CardTitle,
  ImageTextWrapper,
  ImageWrapper,
  Percentage,
  SaleDescription,
  SalesCard,
} from './SalesAd.styled';

const SalesAd = () => {
  return (
    <SalesCard>
      <ImageWrapper>
        <ImageTextWrapper>
          <Percentage>55%</Percentage>
          <SaleDescription>Summer sales</SaleDescription>
        </ImageTextWrapper>
      </ImageWrapper>
      <CardTitle>Follow us on Facebook</CardTitle>
      <CardDescription>
        Sed ut perspiciatis inde omnis iste natus error sit
      </CardDescription>
      <CardFollowLink
        href="http://facebook.com"
        target="_blank"
        rel="noopener nofollow noreferrer"
      >
        <span className="icon-facebook"></span>
        Follow
      </CardFollowLink>
    </SalesCard>
  );
};

export default SalesAd;
