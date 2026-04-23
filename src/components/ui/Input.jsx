import { InputBase, styled, Typography } from '@mui/material'
import { forwardRef } from 'react'

export const Input = forwardRef(
  ({
    id,
    type = 'text',
    placeholder,
    label,
    error,
    helperText,
    disabled,
    value,
    onChange,
    ...props
  }) => (
    <div>
      {label && <label htmlFor={id}>{label}</label>}

      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        error={error}
        disabled={disabled}
        value={value}
        onChange={onChange}
        {...props}
      />

      {helperText && (
        <HelperText component="span" isError={error}>
          {helperText}
        </HelperText>
      )}
    </div>
  )
)

const StyledInput = styled(InputBase)(({ theme }) => {
  const { primary, secondary, error } = theme.palette

  return {
    width: '100%',
    height: '2.875rem',
    borderRadius: '0.5rem',
    padding: '0.5rem 1.25rem',

    border: `1px solid ${secondary.greyMid}`,
    backgroundColor: primary.white,

    fontFamily: 'Helvetica',
    fontWeight: '400',
    lineHeight: '100%',
    fontSize: '1rem',

    '& .MuiInputBase-input': {
      padding: 0,
      color: primary.black,

      '&::placeholder': {
        color: secondary.greyMid,
        opacity: 1,
      },
    },

    '&:hover': {
      border: `1px solid ${primary.black}`,
    },

    '&.Mui-focused': {
      border: `1px solid ${primary.black}`,
    },

    '&.Mui-error': {
      border: `1px solid ${error.main}`,

      '&:hover': {
        border: `1px solid ${error.main}`,
      },
    },

    '&.Mui-disabled': {
      backgroundColor: primary.greyDark,
      border: `1px solid ${secondary.greyMid}`,
    },
  }
})

const HelperText = styled(Typography)(({ theme, isError }) => {
  const { secondary, error } = theme.palette

  return {
    fontSize: '0.75rem',
    marginTop: '0.25rem',
    display: 'block',
    color: isError ? error.main : secondary.greyMid,
  }
})
