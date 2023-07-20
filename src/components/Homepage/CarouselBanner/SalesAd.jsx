import {
  CardDescription,
  CardFollowLink,
  CardTitle,
  ImageWrapper,
  Percentage,
  SaleDescription,
  SalesCard,
} from './SalesAd.styled';

const SalesAd = () => {
  return (
    <SalesCard>
      <ImageWrapper>
        <Percentage>55%</Percentage>
        <SaleDescription>Summer sales</SaleDescription>
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
