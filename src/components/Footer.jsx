import { Box, Container, Grid, Typography, Link, IconButton, styled } from '@mui/material'
import { InstagramIcon, YoutubeIcon } from '../../assets/icons/index.js'

const footerLinks = {
  'Присоединиться к нам': ['Вакансии', 'для партнеров'],
  'Информация об компании': ['О нас', 'Часто задаваемые вопросы', 'Связаться с нами', 'Войти'],
}

const legalLinks = ['Положение и условия', 'Политика конфиденциальности']

export default function Footer() {
  return (
    <FooterWrapper component="footer">
      <Container maxWidth="xl" disableGutters>
        <Grid container spacing={4} alignItems="flex-start">
          {Object.entries(footerLinks).map(([title, links]) => (
            <Grid item xs={12} sm={6} md={title === 'Информация об компании' ? 5 : 3} key={title}>
              <FooterTitle variant="subtitle1">{title}</FooterTitle>

              <Grid container>
                {title === 'Информация об компании' ? (
                  <>
                    <Grid item xs={6}>
                      {links.map((link) => (
                        <FooterLink key={link} href="#">
                          {link}
                        </FooterLink>
                      ))}
                    </Grid>
                    <Grid item xs={6}>
                      {legalLinks.map((link) => (
                        <FooterLink key={link} href="#">
                          {link}
                        </FooterLink>
                      ))}
                    </Grid>
                  </>
                ) : (
                  <Grid item xs={12}>
                    {links.map((link) => (
                      <FooterLink key={link} href="#">
                        {link}
                      </FooterLink>
                    ))}
                  </Grid>
                )}
              </Grid>
            </Grid>
          ))}

          <Grid item xs={12} md="auto">
            <SocialColumn>
              <SocialButton href="#">
                <SocialIcon src={InstagramIcon} alt="instagram" />
              </SocialButton>
              <SocialButton href="#">
                <SocialIcon src={YoutubeIcon} alt="youtube" />
              </SocialButton>
            </SocialColumn>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled(Box)({
  backgroundColor: '#cc0000',
  padding: '40px 48px',
})

const FooterTitle = styled(Typography)({
  color: '#ffffff',
  fontWeight: '700 !important',
  fontSize: '15px !important',
  marginBottom: '16px !important',
})

const FooterLink = styled(Link)({
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

const SocialColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  alignItems: 'center',
  marginLeft: 'auto',
})

const SocialButton = styled(IconButton)({
  border: '2px solid rgba(255, 255, 255, 0.7) !important',
  borderRadius: '8px !important',
  color: '#ffffff !important',
  padding: '6px !important',
  '&:hover': {
    borderColor: '#ffffff !important',
    backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
  },
})

const SocialIcon = styled('img')({
  width: '20px',
  height: '20px',
})
