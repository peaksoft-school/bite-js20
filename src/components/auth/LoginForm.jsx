import { useGoogleLogin } from '@react-oauth/google'
import { GoogleIcon } from '../../assets/icons'
import { useForm } from 'react-hook-form'
import {
  StyledForm,
  StyledInputMUI,
  StyledGoogle,
  StyledButton,
  StyledInputWrapper,
  StyledForgotPassword,
} from './authStyles'

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const submitHandler = (data) => {
    console.log(data) // я оставил это чтобы зоглушил ошибку до соеднение сервером (API)
  }

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (response) => {
      console.log('Google токен:', response)
    },
    onError: () => console.log('Ошибка входа через Google'),
  })

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)}>
      <StyledInputWrapper>
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
      </StyledInputWrapper>

      <StyledInputWrapper>
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
      </StyledInputWrapper>

      <StyledGoogle onClick={handleGoogleLogin}>
        <img src={GoogleIcon} alt="Google" />
      </StyledGoogle>

      <StyledButton type="submit" variant="contained">
        Войти
      </StyledButton>

      <StyledForgotPassword href="/forgot-password">Забыли пароль?</StyledForgotPassword>
    </StyledForm>
  )
}
