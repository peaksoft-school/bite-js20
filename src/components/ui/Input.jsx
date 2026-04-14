import { InputBase, styled } from '@mui/material'

export const Input = ({
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
  <div id="12">
    {label && <label htmlFor={id}>{label}</label>}

    <StyledInput
      type={type}
      placeholder={placeholder}
      error={error}
      disabled={disabled}
      value={value}
      onChange={onChange}
      {...props}
    />

    {helperText && <HelperText component="span">{helperText}</HelperText>}
  </div>
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

const HelperText = styled('span')(({ theme, error }) => ({
  fontSize: '0.75rem',
  marginTop: '0.25rem',
  display: 'block',
  color: error ? theme.palette.error.main : theme.palette.secondary.greyMid,
}))
