import { useState, forwardRef } from 'react'
import { Box, Typography, IconButton, styled } from '@mui/material'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'

export const FoodItem = forwardRef(({ img, name, price, weight }, ref) => {
  const [count, setCount] = useState(0)
  const [imgError, setImgError] = useState(false)

  const handleIncrement = () => setCount((c) => c + 1)
  const handleDecrement = () => setCount((c) => Math.max(0, c - 1))

  return (
    <StyledCardWrapper ref={ref}>
      <StyledFoodInfo>
        {imgError || !img ? (
          <StyledImagePlaceholder>
            <RestaurantMenuIcon sx={{ fontSize: 32, color: '#bbb' }} />
          </StyledImagePlaceholder>
        ) : (
          <StyledFoodImage src={img} alt={name} onError={() => setImgError(true)} />
        )}

        <StyledFoodMeta>
          <StyledFoodName>{name}</StyledFoodName>

          <StyledPriceRow>
            <StyledPrice>{price} сом</StyledPrice>
            <StyledWeight>{weight} г</StyledWeight>
          </StyledPriceRow>
        </StyledFoodMeta>
      </StyledFoodInfo>

      <StyledCounterWrapper>
        <StyledCounterButton
          disableRipple
          onClick={handleDecrement}
          disabled={count === 0}
          aria-label="Уменьшить количество"
        >
          −
        </StyledCounterButton>

        <StyledCountLabel>{count}</StyledCountLabel>
        <StyledCounterButton
          disableRipple
          onClick={handleIncrement}
          aria-label="Увеличить количество"
        >
          +
        </StyledCounterButton>
      </StyledCounterWrapper>
    </StyledCardWrapper>
  )
})

const StyledCardWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '10px 0',
})

const StyledFoodInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
})

const StyledFoodImage = styled('img')({
  width: '90px',
  height: '90px',
  borderRadius: '14px',
  objectFit: 'cover',
  flexShrink: 0,
  display: 'block',
})

const StyledImagePlaceholder = styled(Box)({
  width: '90px',
  height: '90px',
  borderRadius: '14px',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f0f0f0',
})

const StyledFoodMeta = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

const StyledFoodName = styled(Typography)({
  fontSize: 16,
  fontWeight: 400,
  marginBottom: '2px',
})

const StyledPriceRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
})

const StyledPrice = styled(Typography)({
  fontSize: 15,
  fontWeight: 400,
})

const StyledWeight = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  color: theme.palette.text.secondary,
}))

const StyledCounterWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  gap: '8px',
  border: '1.5px solid #1a1a1a',
  borderRadius: '50px',
  justifyContent: 'space-between',
  width: '110px',
  height: '38px',
  padding: '0 12px',
  flexShrink: 0,
})

const StyledCountLabel = styled(Typography)({
  fontSize: 17,
  fontWeight: 500,
  minWidth: '18px',
  textAlign: 'center',
  marginBottom: '5px',
})

const StyledCounterButton = styled(IconButton)({
  padding: 0,
  color: '#1a1a1a',
  fontSize: '22px',
  lineHeight: 1,
  width: '22px',
  height: '22px',
  borderRadius: 0,

  '&:hover': {
    backgroundColor: 'transparent',
  },

  '&.Mui-disabled': {
    color: '#ccc',
  },
})
