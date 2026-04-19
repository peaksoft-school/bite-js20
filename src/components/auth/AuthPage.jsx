import { Box, styled } from '@mui/material'
import { Button } from '../ui/Button'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { LogoIcon } from '../../assets/icons'
import background from '../../assets/images/bite-background.png'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const motionProps = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.25 },
}

export const AuthPage = () => {
  const [isState, setIsStateAuth] = useState(true)

  const toggleAuth = (value) => setIsStateAuth(value)

  return (
    <StyledBox>
      <StyledBoxMain isState={isState}>
        <StyledLogo src={LogoIcon} />

        <StyledAuthBtnBox>
          <StyledButton onClick={() => toggleAuth(true)} active={isState}>
            Войти
          </StyledButton>

          <StyledButton onClick={() => toggleAuth(false)} active={!isState}>
            Регистрация
          </StyledButton>
        </StyledAuthBtnBox>

        <AnimatePresence mode="wait">
          {isState ? (
            <motion.div key="login" {...motionProps}>
              <LoginForm />
            </motion.div>
          ) : (
            <motion.div key="register" {...motionProps}>
              <RegisterForm />
            </motion.div>
          )}
        </AnimatePresence>
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

const StyledBoxMain = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isState',
})(({ theme, isState }) => {
  const { primary } = theme.palette

  return {
    width: '40rem',
    height: isState ? '43rem' : '52rem',
    backgroundColor: primary.white,
    borderRadius: '10px',

    display: 'grid',
    alignContent: 'start',
    justifyItems: 'center',
    transition: 'height 0.3s ease',
    overflow: 'hidden',
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
    alignItems: 'center',
  }
})

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => {
  const { primary } = theme.palette

  return {
    height: '3.5rem',
    padding: '10px 20px',

    fontSize: '2rem',

    backgroundColor: active ? primary.white : 'transparent',
    border: active ? `1px solid ${primary.black}` : 'none',
    borderRadius: active ? '8px' : '0px',

    transition: 'all 0.3s ease',
  }
})
