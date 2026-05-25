import { Box, styled, Typography } from '@mui/material'
import { Button } from '../ui/Button'

export const EstablishmentInfo = ({ data }) => {
  const {
    image,
    address,
    working_hours: { open, close },
    contacts: { phone, email },
    legal_info: { ip_number, seller, inn },
    categories,
  } = data

  return (
    <div>
      <StyledBoxImage>
        <StyledImage src={image} alt="" />
      </StyledBoxImage>

      <StyledH1 variant="h1">Информация о заведении</StyledH1>

      <StyledBoxInfo>
        <div>
          <StyledH2 variant="h2">Адрес: </StyledH2>

          <StyledSpan component="span">{address}</StyledSpan>
        </div>

        <div>
          <StyledH2 variant="h2">График работы: </StyledH2>

          <StyledSpan component="span">
            с {open} до {close}
          </StyledSpan>
        </div>

        <StyledBoxContacts>
          <StyledH2 variant="h2">Контакты: </StyledH2>

          <StyledSpan component="span">{phone}</StyledSpan>

          <StyledSpan component="span">{email}</StyledSpan>
        </StyledBoxContacts>

        <div className="inline">
          <StyledH2 variant="h2">ИП: </StyledH2>

          <StyledSpan component="span">{ip_number}</StyledSpan>
        </div>

        <div>
          <StyledH2 variant="h2">Исполнитель (продавец): </StyledH2>
          
          <StyledSpan component="span">{seller}</StyledSpan>{' '}
        </div>

        <div>
          <StyledH2 variant="h2">Идентификационный номер налогоплатильщика: </StyledH2>

          <StyledSpan component="span">{inn}</StyledSpan>
        </div>

        <StyledBoxFood>
          <StyledH2 variant="h2">Категории еды: </StyledH2>

          {categories.map((cat) => (
            <StyledSpan component="span" key={cat}>
              {cat},
            </StyledSpan>
          ))}
        </StyledBoxFood>
      </StyledBoxInfo>

      <StyledBoxButton>
        <Button>На доп. проверку</Button>

        <Button>Отклонить!</Button>

        <Button variant="contained">Одобрить!</Button>
      </StyledBoxButton>
    </div>
  )
}

const StyledBoxImage = styled(Box)({
  width: '900px',
  height: '364px',
})

const StyledImage = styled('img')({
  maxWidth: '900px',
  maxHeight: '364px',
  width: '100%',

  borderRadius: '10px',
  objectFit: 'cover',
})

const StyledH1 = styled(Typography)({
  width: '517px',
  height: '46px',
  marginTop: '40px',

  fontFamily: 'Helvetica',
  fontWeight: 700,
  fontSize: '40px',
  lineHeight: '100%',
})

const StyledBoxInfo = styled(Box)({
  margin: '60px 0 80px',
  display: 'grid',
  gap: '20px',

  '& > .inline': {
    '& > h2': {
      display: 'inline',
    },
  },
})

const StyledH2 = styled(Typography)({
  height: '28px',

  fontFamily: 'Helvetica',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '100%',
})

const StyledSpan = styled(Typography)({
  height: '28px',

  fontFamily: 'Helvetica',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '100%',
})

const StyledBoxContacts = styled(Box)({
  display: 'grid',
})

const StyledBoxFood = styled(Box)({
  display: 'flex',
  gap: '10px',
})

const StyledBoxButton = styled(Box)({
  display: 'flex',
  justifyContent: 'end',
  gap: '20px',
})
