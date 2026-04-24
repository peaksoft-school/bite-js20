import { styled, Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { BANNER_DATA } from '../../utils/constants'
import 'swiper/css'

export const BannerSlider = () => (
  <SliderWrapper>
    <Swiper
      modules={[Autoplay]}
      slidesPerView={2}
      spaceBetween={20}
      loop={true}
      speed={1200}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {BANNER_DATA.map((banner) => (
        <SwiperSlide key={banner.id}>
          <BannerCard component="img" src={banner.image} alt={`banner-${banner.id}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  </SliderWrapper>
)

const SliderWrapper = styled(Box)({
  width: '100%',
  borderRadius: '20px',
  overflow: 'hidden',
})

const BannerCard = styled(Box)({
  width: '100%',
  height: '486px',
  objectFit: 'cover',
  borderRadius: '10px',
})
