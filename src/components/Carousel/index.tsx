import { Flex, useBreakpointValue } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import { Slide } from './Slide';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Carousel: React.FC = () => {
  const width = useBreakpointValue({
    base: '375px',
    md: '768px',
    lg: '1240px',
  });

  const height = useBreakpointValue({
    base: '250px',
    md: '350px',
    lg: '450px',
  });

  return (
    <Flex
      w={width}
      h={height}
      align="center"
      justify="center"
      m={{ base: '0 auto 24px', lg: '0 auto 40px' }}
    >
      <Swiper
        navigation
        pagination={{
          clickable: true,
        }}
        loop
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <Slide
            slug="africa"
            background="/images/Carousel/africa.jpg"
            height={height}
            title="África"
            description="E seu povo diverso"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            slug="america-do-norte"
            background="/images/Carousel/america_norte.jpg"
            height={height}
            title="América do Norte"
            description="E seu estilo de vida único"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            slug="america-do-sul"
            background="/images/Carousel/america_sul.jpg"
            height={height}
            title="América do Sul"
            description="E sua culinário única"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            slug="asia"
            background="/images/Carousel/asia.jpg"
            height={height}
            title="Ásia"
            description="E sua cultura milenar"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            slug="europa"
            background="/images/Carousel/europa.jpg"
            height={height}
            title="Europa"
            description="O continente mais antigo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            slug="oceania"
            background="/images/Carousel/oceania.jpg"
            height={height}
            title="Oceania"
            description="Um continente a ser explorado"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};
