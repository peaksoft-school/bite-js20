import { useCallback } from 'react'
import { styled, Box, IconButton } from '@mui/material'
import { LeftArrowIcon, RightArrowIcon } from '../../assets/icons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

export const InfiniteCarousel = ({ data, speed = 5000 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: speed, stopOnInteraction: false }),
  ])

  const handlePrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const handleNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  if (!data || data.length === 0) return null

  const displayData = data.length < 4 ? [...data, ...data, ...data, ...data] : data

  return (
    <StyleOuterContainer>
      <StyledArrow className="left" onClick={handlePrev} disableRipple>
        <img src={LeftArrowIcon} alt="prev" />
      </StyledArrow>

      <StyledArrow className="right" onClick={handleNext} disableRipple>
        <img src={RightArrowIcon} alt="next" />
      </StyledArrow>

      <StyleViewport ref={emblaRef}>
        <StyleWrapper>
          {displayData.map((item, index) => (
            <StyleImageBox key={`${item.id}-${index}`}>
              <StyleImage src={item.image} alt="" />
            </StyleImageBox>
          ))}
        </StyleWrapper>
      </StyleViewport>
    </StyleOuterContainer>
  )
}

const StyleOuterContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  margin: '20px 0 0',
})

const StyleViewport = styled(Box)({
  overflow: 'hidden',
})

const StyleWrapper = styled(Box)({
  display: 'flex',
})

const StyleImageBox = styled(Box)({
  flex: '0 0 auto',
  paddingLeft: '20px',
})

const StyleImage = styled('img')({
  width: '555px',
  height: '152px',
  borderRadius: '10px',
  objectFit: 'cover',
})

const StyledArrow = styled(IconButton)({
  position: 'absolute',
  top: '49%',
  zIndex: 10,
  transform: 'translateY(-50%)',

  width: '38px',
  height: '38px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,

  '&.left': {
    left: 0,
  },

  '&.right': {
    right: 0,
  },

  '&:hover': {
    opacity: 0.8,
    transform: 'translateY(-50%) scale(1.02)',
  },
})
