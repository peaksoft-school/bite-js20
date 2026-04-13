import { Button as MuiButton, styled } from '@mui/material'
import { forwardRef } from 'react'

export const Button = forwardRef(
  ({ children, variant, type = 'button', disabled, icon, ...rest }, ref) => (
    <StyledButton variant={variant} ref={ref} type={type} disabled={disabled} {...rest}>
      {icon && '+'} {children}
    </StyledButton>
  )
)

const StyledButton = styled(MuiButton)(({ variant }) => ({
  padding: '8px 20px',
  borderRadius: '10px',
  textTransform: 'none',

  ...(!variant && {
    border: '1px solid #000000',
    color: '#000000',
  }),

  ...(variant === 'contained' && {
    backgroundColor: '#FFD519',
    color: '#000000',

    '&:hover': {
      backgroundColor: '#FFD519',
    },
  }),

  ...(variant === 'text' && {
    color: '#000000',

    '&:hover': {
      backgroundColor: 'rgba(255, 213, 25, 0.1)',
    },
  }),

  ...(variant === 'outlined' && {
  border: '1px solid #000000',
  color: '#000000',

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    border: '1px solid #000000',
  },
}),

  '&:active': {
    transform: 'scale(0.97)',
  },

  '&.Mui-disabled': {
    backgroundColor: '#cfcfcf',
    color: '#888',
  },
}))
