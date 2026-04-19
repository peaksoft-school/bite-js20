import { Box, styled } from '@mui/material'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import background from '../../assets/images/bite-background.png'

export const AuthPage = () => {
  return (
    <StyledBox>
        <LoginForm />
        <RegisterForm />
    </StyledBox>
  )
}

const StyledBox = styled(Box)({
  width: "100vw",
  height: "100vh",

  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
