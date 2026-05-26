import { Box, Grid, Typography, Link, IconButton, styled } from '@mui/material'
import { InstagramIcon, YoutubeIcon } from '../assets/icons'

export const Footer = () => (
  <StyledFooterWrapper component="footer">
    <Grid container spacing={4} justifyContent="space-between">
      <Grid item xs={12} sm={6} md={3}>
        <StyledFooterTitle variant="subtitle1">Присоединиться к нам</StyledFooterTitle>

        <StyledFooterLink href="#">Вакансии</StyledFooterLink>
        <StyledFooterLink href="#">Для партнеров</StyledFooterLink>
      </Grid>

      <Grid item xs={12} sm={6} md={5}>
        <StyledFooterTitle variant="subtitle1">Информация об компании</StyledFooterTitle>

        <Grid container gap={30}>
          <Grid item xs={6}>
            <StyledFooterLink href="#">О нас</StyledFooterLink>
            <StyledFooterLink href="#">Часто задаваемые вопросы</StyledFooterLink>
            <StyledFooterLink href="#">Связаться с нами</StyledFooterLink>
            <StyledFooterLink href="#">Войти</StyledFooterLink>
          </Grid>

          <Grid item xs={6}>
            <StyledFooterLink href="#">Положение и условия</StyledFooterLink>
            <StyledFooterLink href="#">Политика конфиденциальности</StyledFooterLink>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md="auto">
        <StyledSocialColumn>
          <StyledSocialButton href="#">
            <StyledSocialIcon src={InstagramIcon} alt="instagram" />
          </StyledSocialButton>

          <StyledSocialButton href="#">
            <StyledSocialIcon src={YoutubeIcon} alt="youtube" />
          </StyledSocialButton>
        </StyledSocialColumn>
      </Grid>
    </Grid>
  </StyledFooterWrapper>
)

const StyledFooterWrapper = styled(Box)({
  backgroundColor: '#cc0000',
  padding: '40px 80px',
  width: '100%',
  fontFamily: 'Helvetica',
})

const StyledFooterTitle = styled(Typography)({
  color: '#ffffff',
  fontWeight: '700',
  fontSize: '15px',
  marginBottom: '16px',
})

const StyledFooterLink = styled(Link)({
  color: 'rgba(255, 255, 255, 0.85)',
  fontSize: '14px',
  display: 'block',
  marginBottom: '10px',
  textDecoration: 'none',
  cursor: 'pointer',

  '&:hover': {
    color: '#ffffff',
  },
})

const StyledSocialColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  alignItems: 'center',
  marginLeft: 'auto',
})

const StyledSocialButton = styled(IconButton)({
  border: '2px solid rgba(255, 255, 255, 0.7)',
  borderRadius: '8px',
  color: '#ffffff',
  padding: '6px',

  '&:hover': {
    borderColor: '#ffffff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
})

const StyledSocialIcon = styled('img')({
  width: '20px',
  height: '20px',
})
