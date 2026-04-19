import { Box, IconButton, keyframes, styled, TextField } from '@mui/material'
import { Button } from '../ui/Button'

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0px); }
`

export const StyledForm = styled('form')({
  margin: '2.5rem 0 1.25rem',
  width: '26rem',
  display: 'grid',
  justifyItems: 'center',
  gap: '1.25rem',
})

export const StyledInputWrapper = styled(Box)({
  width: '100%',
  minHeight: '4rem',
})

export const StyledInputMUI = styled(TextField)(({ theme }) => {
  const { primary, secondary, error } = theme.palette
  return {
    width: '100%',
    '& .MuiInputLabel-root': {
      color: secondary.greyMid,
      '&.Mui-focused': { color: primary.black },
      '&.Mui-error': { color: error.main },
    },
    '& .MuiOutlinedInput-root': {
      height: '2.875rem',
      borderRadius: '0.5rem',
      backgroundColor: primary.white,
      fontWeight: '400',
      fontSize: '1rem',
      '& fieldset': { border: `1px solid ${secondary.greyMid}` },
      '&:hover fieldset': { border: `1px solid ${primary.black}` },
      '&.Mui-focused fieldset': { border: `1px solid ${primary.black}` },
      '&.Mui-error fieldset': { border: `1px solid ${error.main}` },
    },
    '& .MuiInputBase-input': {
      padding: '0.5rem 1.25rem',
      color: primary.black,
      '&::placeholder': { color: secondary.greyMid, opacity: 1 },
    },
    '& .MuiFormHelperText-root.Mui-error': {
      animation: `${fadeIn} 0.4s ease-out`,
      lineHeight: 'normal',
    },
  }
})

export const StyledGoogle = styled(IconButton)({
  width: '28px',
  height: '28px',
  opacity: '1',
})

export const StyledButton = styled(Button)({
  width: '100%',
  height: '3.125rem',
  marginTop: '1.25rem',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '100%',
})

export const StyledForgotPassword = styled('a')(({ theme }) => ({
  height: '1.125rem',

  color: theme.palette.primary.black,
  fontSize: '0.875rem',
  fontFamily: 'Helvetica',
  fontWeight: '400',
  cursor: 'pointer',
  textDecoration: 'none',
  lineHeight: '100%',
  letterSpacing: '0%',
}))
