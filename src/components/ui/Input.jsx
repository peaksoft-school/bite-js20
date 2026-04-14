import { Box, InputBase, Typography } from '@mui/material'

export const Input = ({
  type = 'text',
  placeholder,
  label,
  error,
  helperText,
  disabled,
  multiline,
  rows,
  value,
  onChange,
  ...props
}) => (
  <Box>
    {label && <label>{label}</label>}

    <InputBase
      type={type}
      placeholder={placeholder}
      error={error}
      disabled={disabled}
      multiline={multiline}
      rows={rows}
      value={value}
      onChange={onChange}
      {...props}
    />

    {helperText && <Typography component="span">{helperText}</Typography>}
  </Box>
)
