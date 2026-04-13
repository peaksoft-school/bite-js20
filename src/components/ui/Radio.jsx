import { forwardRef } from 'react'
import { Radio as MuiRadio, styled } from '@mui/material'

export const Radio = forwardRef(({ checked, onChange, disabled = false, icon, ...rest }, ref) => (
  <StyledMuiLabel>
    <StyledMuiRadio ref={ref} checked={checked} onChange={onChange} disabled={disabled} {...rest} />
    <StyledMuiSpan checked={checked}>{checked && icon}</StyledMuiSpan>
  </StyledMuiLabel>
))

const StyledMuiLabel = styled('label')({
  position: 'relative',
  display: 'inline-block',
  width: 24,
  height: 24,
})

const StyledMuiRadio = styled(MuiRadio)({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
})

const StyledMuiSpan = styled('span')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  borderRadius: '50%',
  border: '1px solid #ccc',
})
