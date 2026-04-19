import { IconButton, keyframes, styled, TextField } from '@mui/material'
import { Button } from '../ui/Button'
import { GoogleIcon } from '../../assets/icons'
import { useForm } from 'react-hook-form'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const submitHandler = (data) => {}

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)}>
      <StyledInputMUI
        type="email"
        placeholder="Email"
        autoComplete="email"
        {...register('email', {
          required: 'Введите email',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Некорректный email',
          },
        })}
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
      />

      <StyledInputMUI
        type="password"
        placeholder="Пароль"
        autoComplete="current-password"
        {...register('password', {
          required: 'Введите пароль',
          minLength: { value: 8, message: 'Минимум 8 символов' },
          validate: {
            hasLetter: (v) => /[a-zA-Z]/.test(v) || 'Пароль должен содержать латинскую букву',
            hasNumber: (v) => /\d/.test(v) || 'Пароль должен содержать цифру',
            onlyAllowed: (v) => /^[a-zA-Z\d]+$/.test(v) || 'Только латиница и цифры',
          },
        })}
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
      />

      <StyledGoogle>
        <img src={GoogleIcon} />
      </StyledGoogle>

      <StyledButton type="submit" variant="contained">
        Войти
      </StyledButton>
    </StyledForm>
  )
}

const StyledForm = styled('form')({
  margin: '2.5rem 0 1.25rem',
  width: '26rem',

  display: 'grid',
  justifyItems: 'center',
  gap: '1.25rem',
})

const StyledInputMUI = styled(TextField)(({ theme }) => {
  const { primary, secondary, error } = theme.palette

  return {
    width: '100%',

    '& .MuiInputLabel-root': {
      color: secondary.greyMid,

      '&.Mui-focused': {
        color: primary.black,
      },

      '&.Mui-error': {
        color: error.main,
      },
    },

    '& .MuiOutlinedInput-root': {
      height: '2.875rem',
      borderRadius: '0.5rem',
      backgroundColor: primary.white,
      fontFamily: 'Helvetica',
      fontWeight: '400',
      fontSize: '1rem',

      '& fieldset': {
        border: `1px solid ${secondary.greyMid}`,
      },

      '&:hover fieldset': {
        border: `1px solid ${primary.black}`,
      },

      '&.Mui-focused fieldset': {
        border: `1px solid ${primary.black}`,
      },

      '&.Mui-error fieldset': {
        border: `1px solid ${error.main}`,
      },
    },

    '& .MuiInputBase-input': {
      padding: '0.5rem 1.25rem',
      color: primary.black,

      '&::placeholder': {
        color: secondary.greyMid,
        opacity: 1,
      },
    },

    '& .MuiFormHelperText-root.Mui-error': {
      animation: `${fadeIn} 0.4s ease-out`,
      lineHeight: 'normal',
    },
  }
})

const StyledGoogle = styled(IconButton)(() => {
  return {
    width: '28px',
    height: '28px',
    opacity: '1',
  }
})

const StyledButton = styled(Button)(() => {
  return {
    width: '100%',
    height: '3.125rem',
    marginTop: '1.25rem',

    fontFamily: 'Helvetica',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '100%',
  }
})
