import { forwardRef } from 'react'
import { Checkbox as MuiCheckbox, styled } from '@mui/material'

export const Checkbox = forwardRef(
  ({ checked, onChange, disabled = false, icon, ...rest }, ref) => (
    <StyledMuiLabel>
      <StyledMuiCheckbox
        ref={ref}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
      <StyledMuiSpan>{checked && icon}</StyledMuiSpan>
    </StyledMuiLabel>
  )
)

const StyledMuiLabel = styled('label')({
  position: 'relative',
  display: 'inline-block',
  width: 24,
  height: 24,
})

const StyledMuiCheckbox = styled(MuiCheckbox)({
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
})
