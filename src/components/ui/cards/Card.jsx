import { useState } from 'react'
import { NoteIcon, SaveFillIcon, BagIcon } from '../../../assets/icons'
import { styled, Typography, Box, ButtonBase } from '@mui/material'

export const Card = ({ data }) => {
  const { name, image, deliveryTime, discount } = data

  const [bookmarked, setBookmarked] = useState(false)

  const handleBookmarkClick = () => setBookmarked((prev) => !prev)

  return (
    <StyledCard>
      <StyledImageWrapper>
        <StyledImage src={image} alt={name} />

        <StyledBookmark bookmarked={bookmarked} onClick={handleBookmarkClick} disableRipple>
          {bookmarked ? <img className="noteState" src={SaveFillIcon} /> : <img src={NoteIcon} />}
        </StyledBookmark>
      </StyledImageWrapper>

      <StyledInfo>
        <StyledName variant="h3">{name}</StyledName>

        <StyledDelivery>
          <StyledDeliveryIcon src={BagIcon} />

          <StyledDeliveryTime component="span">{deliveryTime} мин</StyledDeliveryTime>
        </StyledDelivery>

        {discount && <StyledDiscount component="span">-{discount}% на ряд блюд</StyledDiscount>}
      </StyledInfo>
    </StyledCard>
  )
}

const StyledCard = styled(Box)({
  maxWidth: '325px',
  maxHeight: '255px',
  width: '100%',
  height: '255px',
  overflow: 'hidden',
})

const StyledImageWrapper = styled(Box)({
  position: 'relative',
})

const StyledImage = styled('img')({
  maxWidth: '325px',
  maxHeight: '182px',
  width: '100%',
  height: '182px',
  borderRadius: '10px',
  objectFit: 'cover',
  display: 'block',
})

const StyledBookmark = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'bookmarked',
})(() => ({
  position: 'absolute',
  top: 10,
  right: 10,
  border: 'none',
  width: '34px',
  height: '34px',
  cursor: 'pointer',
  background: 'rgba(0, 0, 0, 0)',

  '& .noteState': {
    width: '17px',
  },
}))

const StyledInfo = styled(Box)({
  marginTop: '10px',
  maxHeight: '63px',
})

const StyledName = styled(Typography)({
  fontFamily: 'Helvetica',
  fontWeight: '400',
  lineHeight: '100%',
  height: '18px',
  fontSize: '16px',
})

const StyledDelivery = styled(Box)({
  marginTop: '6px',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  color: '#000000',
})

const StyledDeliveryIcon = styled('img')({
  width: '18px',
  height: '18px',
})

const StyledDeliveryTime = styled(Typography)({
  fontFamily: 'Helvetica',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '100%',
})

const StyledDiscount = styled(Typography)({
  marginTop: '10px',
  height: '11px',
  display: 'inline-block',
  background: '#48C60233',
  color: '#48C602',
  fontSize: '10px',
  padding: '0 8px',
  borderRadius: '10px',
  lineHeight: '100%',
  fontFamily: 'Helvetica',
  fontWeight: 400,
})
