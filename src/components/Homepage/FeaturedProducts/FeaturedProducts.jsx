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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </FeaturedSection>
  );
};

export default FeaturedProducts;
