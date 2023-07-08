import {
  FeaturedSection,
  SectionSubTitle,
  SectionTitle,
  SwiperControls,
} from './FeaturedProducts.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
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
        modules={[Navigation, Autoplay]}
        slidesPerView={4}
        slidesPerGroup={4}
        autoplay={{ delay: 5000 }}
        rewind={true}
      >
        {popularItems.map(item => (
          <SwiperSlide key={item.title + item.price}>
            <BasicTile item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </FeaturedSection>
  );
};

export default FeaturedProducts;
