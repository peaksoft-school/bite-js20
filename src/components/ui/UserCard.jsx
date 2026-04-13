import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { Button } from '../ui/Button'

export const UserCard = ({ item }) => {
  const { title, price, oldPrice, weight, image } = item

  const [count, setCount] = useState(0)

  const hasDiscount = !!(oldPrice && oldPrice > price)

  const handleAdd = () => setCount(1)
  const handleIncrement = () => setCount(count + 1)

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1)
    } else {
      setCount(0)
    }
  }

  return (
    <StyledCard>
      <StyledImageWrapper>
        <img src={image} alt={title} />

        {hasDiscount && <StyledDiscount>-20%</StyledDiscount>}
      </StyledImageWrapper>

      <StyledPriceRow>
        <StyledCurrentPrice isDiscount={hasDiscount}>{price} сом</StyledCurrentPrice>

        {hasDiscount && <StyledOldPrice>{oldPrice} сом</StyledOldPrice>}
      </StyledPriceRow>

      <StyledTitle>{title}</StyledTitle>
      <StyledWeight>{weight} г</StyledWeight>

      {count === 0 ? (
        <StyledAddButton onClick={handleAdd} variant="outlined">
          + Добавить
        </StyledAddButton>
      ) : (
        <StyledCounter>
          <StyledCounterButton onClick={handleDecrement}>-</StyledCounterButton>

          <Typography>{count}</Typography>

          <StyledCounterButton onClick={handleIncrement}>+</StyledCounterButton>
        </StyledCounter>
      )}
    </StyledCard>
  )
}

const StyledCard = styled(Box)({
  width: '210px',
  backgroundColor: '#F5F4F2',
  borderRadius: '10px',
  padding: '10px',
})

const StyledImageWrapper = styled(Box)({
  position: 'relative',

  '& img': {
    width: '190px',
    height: '168px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
})

const StyledDiscount = styled(Box)({
  position: 'absolute',
  bottom: '8px',
  right: '8px',
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '2px 6px',
  borderRadius: '6px',
  fontSize: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const StyledPriceRow = styled(Box)({
  display: 'flex',
  gap: '8px',
  alignItems: 'baseline',
  marginTop: '8px',
})

const StyledCurrentPrice = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDiscount',
})(({ isDiscount }) => ({
  fontSize: '18px',
  fontWeight: 400,
  color: isDiscount ? '#ff6b00' : '#000',
}))

const StyledOldPrice = styled(Typography)({
  textDecoration: 'line-through',
  color: '#999',
})

const StyledTitle = styled(Typography)({
  marginTop: '6px',
  fontSize: '18px',
  fontWeight: 500,
})

const StyledWeight = styled(Typography)({
  fontSize: '14px',
  color: '#000',
})

const StyledCounter = styled(Box)({
  marginTop: '10px',
  height: '38px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid black',
  borderRadius: '10px',
  padding: '0 10px',
})

const StyledCounterButton = styled(Button)({
  minWidth: 'auto',
  border: 'none',
  background: 'transparent',
  boxShadow: 'none',
  fontSize: '18px',
})

const StyledAddButton = styled(Button)({
  width: '100%',
  marginTop: '10px',
  height: '38px',
  alignItems: 'center',
})
