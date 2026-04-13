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
    <StyledOuterContainer>
      <StyledArrow className="left" onClick={handlePrev} disableRipple>
        <img src={LeftArrowIcon} alt="prev" />
      </StyledArrow>

      <StyledArrow className="right" onClick={handleNext} disableRipple>
        <img src={RightArrowIcon} alt="next" />
      </StyledArrow>

      <StyledViewport ref={emblaRef}>
        <StyledWrapper>
          {displayData.map((item, index) => (
            <StyledImageBox key={`${item.id}-${index}`}>
              <StyledImage src={item.image} alt="" />
            </StyledImageBox>
          ))}
        </StyledWrapper>
      </StyledViewport>
    </StyledOuterContainer>
  )
}

const StyledOuterContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  margin: '20px 0 0',
})

const StyledViewport = styled(Box)({
  overflow: 'hidden',
})

const StyledWrapper = styled(Box)({
  display: 'flex',
})

const StyledImageBox = styled(Box)({
  flex: '0 0 auto',
  paddingLeft: '20px',
})

const StyledImage = styled('img')({
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
