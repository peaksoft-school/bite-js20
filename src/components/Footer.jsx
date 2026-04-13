import { Box, Container, Grid, Typography, Link, IconButton, styled } from '@mui/material'
import { InstagramIcon, YoutubeIcon } from '../../assets/icons/index.js'

const footerLinks = {
  'Присоединиться к нам': ['Вакансии', 'для партнеров'],
  'Информация об компании': ['О нас', 'Часто задаваемые вопросы', 'Связаться с нами', 'Войти'],
}

const legalLinks = ['Положение и условия', 'Политика конфиденциальности']

export default function Footer() {
  return (
    <StyledFooterWrapper component="footer">
      <Container maxWidth="xl" disableGutters>
        <Grid container spacing={4} alignItems="flex-start">
          {Object.entries(footerLinks).map(([title, links]) => (
            <Grid item xs={12} sm={6} md={title === 'Информация об компании' ? 5 : 3} key={title}>
              <StyledFooterTitle variant="subtitle1">{title}</StyledFooterTitle>

              <Grid container>
                {title === 'Информация об компании' ? (
                  <>
                    <Grid item xs={6}>
                      {links.map((link) => (
                        <StyledFooterLink key={link} href="#">
                          {link}
                        </StyledFooterLink>
                      ))}
                    </Grid>
                    <Grid item xs={6}>
                      {legalLinks.map((link) => (
                        <StyledFooterLink key={link} href="#">
                          {link}
                        </StyledFooterLink>
                      ))}
                    </Grid>
                  </>
                ) : (
                  <Grid item xs={12}>
                    {links.map((link) => (
                      <StyledFooterLink key={link} href="#">
                        {link}
                      </StyledFooterLink>
                    ))}
                  </Grid>
                )}
              </Grid>
            </Grid>
          ))}

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
      </Container>
    </StyledFooterWrapper>
  )
}

const StyledFooterWrapper = styled(Box)({
  backgroundColor: '#cc0000',
  padding: '40px 48px',
})

const StyledFooterTitle = styled(Typography)({
  color: '#ffffff',
  fontWeight: '700 !important',
  fontSize: '15px !important',
  marginBottom: '16px !important',
})

const StyledFooterLink = styled(Link)({
  color: 'rgba(255, 255, 255, 0.85) !important',
  fontSize: '14px !important',
  display: 'block !important',
  marginBottom: '10px !important',
  textDecoration: 'none !important',
  cursor: 'pointer',
  '&:hover': {
    color: '#ffffff !important',
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
  border: '2px solid rgba(255, 255, 255, 0.7) !important',
  borderRadius: '8px !important',
  color: '#ffffff !important',
  padding: '6px !important',
  '&:hover': {
    borderColor: '#ffffff !important',
    backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
  },
})

const StyledSocialIcon = styled('img')({
  width: '20px',
  height: '20px',
})
