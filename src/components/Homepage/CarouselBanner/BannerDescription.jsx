import {
  Banner,
  Description,
  Title,
  ViewMoreLink,
} from './BannerDescription.styled';

const BannerDescription = ({ contentAlign }) => {
  return (
    <Banner className={`items-${contentAlign}`}>
      <Title>Control and manage any device with cloud solutions</Title>
      <Description>
        Improve business perfomance and the user experience with the right mix
        of IoT technology and processes
      </Description>
      <ViewMoreLink to={'category-landing'}>View more</ViewMoreLink>
    </Banner>
  );
};

export default BannerDescription;
