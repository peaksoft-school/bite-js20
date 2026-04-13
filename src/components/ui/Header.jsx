import { styled, Box } from '@mui/material'
import {
  MapIcon,
  MagnifierIcon,
  WorldIcon,
  BasketIcon,
  UserIcon,
  LogoIcon,
} from '../../assets/icons'
import { Button } from './Button'

export const Header = ({ address = 'Укажите адрес', isAuth = false, cartCount = 0 }) => (
  <StyleHeaderWrapper>
    <StyleLeftContainer>
      <img src={LogoIcon} alt="logo" />

      <StyleAddress>
        <img src={MapIcon} alt="map" />

        {address}
      </StyleAddress>
    </StyleLeftContainer>

    <StyleRightContainer>
      <StyleSearchContainer>
        <StyleSearchInput placeholder="Найти ресторан/кафе" />
        <StyleSearchIconImg src={MagnifierIcon} alt="search" />
      </StyleSearchContainer>

      {isAuth ? (
        <>
          <StyleWorld src={WorldIcon} alt="world" className="world-icon" />

          <StyleCartButton>
            <img src={BasketIcon} alt="basket" /> Корзина {cartCount}
          </StyleCartButton>

          <StyleUser src={UserIcon} alt="user" className="user-icon" />
        </>
      ) : (
        <StyleButton>Войти</StyleButton>
      )}
    </StyleRightContainer>
  </StyleHeaderWrapper>
)

const StyleHeaderWrapper = styled(Box)({
  width: '100%',
  height: '44px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '40px',
  backgroundColor: '#fff',
  fontFamily: 'Helvetica',
})

const StyleLeftContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
})

const StyleAddress = styled(Box)({
  padding: '8px 20px',
  border: '1px solid #000000',
  borderRadius: '10px',
  gap: '10px',
  fontSize: '16px',
  display: 'flex',
  fontWeight: '400',
  marginLeft: '42px',
})

const StyleRightContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',

  '& .world-icon, .user-icon': {
    cursor: 'pointer',
  },
})

const StyleSearchContainer = styled(Box)({
  position: 'relative',
})

const StyleSearchInput = styled('input')(({ theme }) => ({
  color: theme.palette.primary.black,
  width: '360px',
  height: '34px',
  borderRadius: '10px',
  border: `1px solid ${theme.palette.primary.black}`,
  padding: '8px 20px 8px 20px',
  outline: 'none',
  fontSize: '16px',

  '&:hover': {
    borderColor: theme.palette.primary.black,
    color: '#444444',
  },

  '&:active': {
    borderColor: theme.palette.primary.black,
    color: '#444444',
  },

  '&:error': {
    borderColor: theme.palette.error.main,
    color: '#444444',
  },
}))

const StyleUser = styled('img')(({ theme }) => ({
  borderRadius: '10px',

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.black,
  },

  '&:active': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.black,
  },
}))

const StyleWorld = styled('img')(({ theme }) => ({
  marginLeft: '20px',
  borderRadius: '10px',

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.black,
  },

  '&:active': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.black,
  },
}))

const StyleSearchIconImg = styled('img')({
  position: 'absolute',
  right: '20px',
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
})

const StyleButton = styled(Button)(({ theme }) => ({
  fontWeight: '700',
  marginLeft: '20px',
  alignItems: 'center',

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.black,
  },

  '&:active': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.black,
  },
}))

const StyleCartButton = styled(Button)(({ theme }) => ({
  padding: '8px 10px 8px 10px',
  gap: '10px',
  fontSize: '16px',
  marginLeft: '10px',
  marginRight: '10px',

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.black,
  },

  '&:active': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.black,
  },
}))
