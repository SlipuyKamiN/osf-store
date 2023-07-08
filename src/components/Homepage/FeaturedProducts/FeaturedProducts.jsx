import {
  FeaturedSection,
  SectionSubTitle,
  SectionTitle,
  SwiperControls,
} from './FeaturedProducts.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { popularItems } from 'data/popularItems';
import BasicTile from 'components/ProductTiles/BasicTile';

const FeaturedProducts = () => {
  return (
    <FeaturedSection>
      <SectionTitle>Featured Products</SectionTitle>
      <SectionSubTitle>
        Unde omnis iste natus error sit voluptatem
      </SectionSubTitle>
      <SwiperControls>{'///'}</SwiperControls>
      <Swiper
        spaceBetween={50}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={4}
      >
        {popularItems.map(item => (
          <SwiperSlide key={item.title}>
            <BasicTile item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </FeaturedSection>
  );
};

export default FeaturedProducts;
