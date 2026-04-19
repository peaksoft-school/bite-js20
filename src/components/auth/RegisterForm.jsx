import { useForm } from 'react-hook-form'
import { GoogleIcon } from '../../assets/icons'
import {
  StyledForm,
  StyledInputMUI,
  StyledGoogle,
  StyledButton,
  StyledInputWrapper,
} from './authStyles'

export const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const submitHandler = (data) => {
    console.log(data) // я оставил это чтобы зоглушил ошибку до соеднение сервером (API)
  }

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)}>
      <StyledInputWrapper>
        <StyledInputMUI
          type="text"
          placeholder="Имя"
          autoComplete="name"
          {...register('name', {
            required: 'Введите ваше имя',
            minLength: { value: 2, message: 'Минимум 2 символа' },
            pattern: {
              value: /^[A-Za-zА-Яа-яЁё\s]+$/,
              message: 'Только буквы',
            },
          })}
          error={Boolean(errors.name)}
          helperText={errors.name?.message}
        />
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledInputMUI
          type="tel"
          placeholder="Номер телефона"
          autoComplete="tel"
          {...register('telephone', {
            required: 'Введите номер телефона',
            pattern: {
              value: /^\+?[0-9\s\-()]{7,15}$/,
              message: 'Некорректный номер телефона',
            },
          })}
          error={Boolean(errors.telephone)}
          helperText={errors.telephone?.message}
        />
      </StyledInputWrapper>

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
          autoComplete="new-password"
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

      <StyledGoogle>
        <img src={GoogleIcon} alt="Google" />
      </StyledGoogle>

      <StyledButton type="submit" variant="contained">
        Регистрация
      </StyledButton>
    </StyledForm>
  )
}
