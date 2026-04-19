import { Box, styled } from '@mui/material'
import { Button } from '../ui/Button'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { LogoIcon } from '../../assets/icons'
import background from '../../assets/images/bite-background.png'
import { useState } from 'react'

export const AuthPage = () => {
  const [isState, setIsStateAuth] = useState(true)

  const openRegister = () => {
    setIsStateAuth(false)
  }

  const openLogin = () => {
    setIsStateAuth(true)
  }

  return (
    <StyledBox>
      <StyledBoxMain>
        <StyledLogo src={LogoIcon} />

        <StyledAuthBtnBox>
          <StyledButton onClick={openLogin} variant="error">Войти</StyledButton>
          <StyledButton onClick={openRegister}>Регистрация</StyledButton>
        </StyledAuthBtnBox>
        {isState ? <LoginForm /> : <RegisterForm />}
      </StyledBoxMain>
    </StyledBox>
  )
}

const StyledBox = styled(Box)(({ theme }) => {
  const { error } = theme.palette

  return {
    width: '100vw',
    height: '100vh',

    backgroundImage: `url(${background})`,
    backgroundColor: error.greyLight,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const StyledBoxMain = styled(Box)(({ theme }) => {
  const { primary } = theme.palette

  return {
    width: '40rem',
    height: '43rem',
    backgroundColor: primary.white,
    borderRadius: '10px',

    display: 'grid',
    alignContent: 'start',
    justifyItems: 'center',
  }
})

const StyledLogo = styled('img')({
  width: '8.75rem',
  marginTop: '3.75rem',
})

const StyledAuthBtnBox = styled(Box)(({ theme }) => {
  const { error } = theme.palette

  return {
    marginTop: '60px',
    width: '28rem',
    height: '5.313rem',
    borderRadius: '10px',
    backgroundColor: error.greyLight,

    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
})

const StyledButton = styled(Button)(() => {
  return {
    height: '3.5rem',
    padding: '10px 20px',

    fontSize: '2rem',
  }
})
