import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { List, ListItemButton, ListItemIcon, ListItemText, Box, Collapse } from '@mui/material'

import {
  AvatarIcon,
  BannersIcon,
  CategoriesIcon,
  OrdersIcon,
  DishesIcon,
  LogoIcon,
  EstablishmentsIcon,
  HomePageIcon,
  ReviewsIcon,
  IconamoonIcon,
  ModerationIcon,
  SettingsIcon,
} from '../../assets/icons/index'

const adminMenu = [
  { text: 'Главная', icon: <Box component="img" src={HomePageIcon} alt="homepage" /> },
  { text: 'Заведения', icon: <Box component="img" src={EstablishmentsIcon} alt="establishment" /> },
]

const userMenu = [
  { text: 'Главная', icon: <Box component="img" src={HomePageIcon} alt="homepage" /> },
  {
    text: 'Мои заведения',
    icon: <Box component="img" src={EstablishmentsIcon} alt="establishment" />,
  },
  { text: 'Блюда', icon: <Box component="img" src={DishesIcon} alt="dishes" /> },
  { text: 'Баннеры', icon: <Box component="img" src={BannersIcon} alt="banner" /> },
  { text: 'Заказы', icon: <Box component="img" src={OrdersIcon} alt="order" /> },
  { text: 'Категории', icon: <Box component="img" src={CategoriesIcon} alt="categorie" /> },
  { text: 'Отзывы', icon: <Box component="img" src={ReviewsIcon} alt="review" /> },
  { text: 'Настройки', icon: <Box component="img" src={SettingsIcon} alt="setting" /> },
  { text: 'Промокод', icon: <Box component="img" src={IconamoonIcon} alt="iconamoon" /> },
]

const moderationChildren = [
  { text: 'Баннеры', icon: <Box component="img" src={BannersIcon} alt="banner" /> },
  { text: 'Отзывы', icon: <Box component="img" src={ReviewsIcon} alt="review" /> },
  { text: 'Блюда', icon: <Box component="img" src={DishesIcon} alt="dishes" /> },
]

export const Sidebar = ({ role = 'admin', active, onChange, props }) => {
  const [open, setOpen] = useState(false)

  const menu = role === 'admin' ? adminMenu : userMenu

  return (
    <StyleSidebarWrapper>
      <StyleHeader>
        <StyleDiv>
          <StyleAvatar>{props}</StyleAvatar>
          <Box component="img" src={AvatarIcon} alt="logo" />
        </StyleDiv>
        <StyleLogo src={LogoIcon} alt="logo" />
      </StyleHeader>

      <List>
        {menu.map((item) => (
          <StyleMenuItem
            key={item.text}
            active={active === item.text ? 1 : 0}
            onClick={() => onChange(item.text)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </StyleMenuItem>
        ))}

        {role === 'admin' && (
          <>
            <StyleMenuItem onClick={() => setOpen(!open)}>
              <ListItemIcon>
                <Box component="img" src={ModerationIcon} alt="moderation" />
              </ListItemIcon>
              <ListItemText primary="Модерация" />
              <StyleRotateIcon src={AvatarIcon} open={open ? 1 : 0} />
            </StyleMenuItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
              <List>
                {moderationChildren.map((item) => (
                  <StyleSubItem
                    key={item.text}
                    active={active === item.text ? 1 : 0}
                    onClick={() => onChange(item.text)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </StyleSubItem>
                ))}
              </List>
            </Collapse>
          </>
        )}
      </List>
    </StyleSidebarWrapper>
  )
}

const StyleSidebarWrapper = styled(Box)({
  width: '280px',
  height: '100vh',
  backgroundColor: '#F5F4F2',
})

const StyleHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #BDBDBD',
})

const StyleMenuItem = styled(ListItemButton)(({ active }) => ({
  marginTop: '40px',
  paddingLeft: '20px',

  '&:hover': {
    backgroundColor: '#FFD600',
  },

  ...(active && {
    backgroundColor: '#FFD600',
  }),
}))

const StyleSubItem = styled(ListItemButton)(({ active }) => ({
  paddingLeft: '60px',
  marginTop: '30px',
  borderTopLeftRadius: '18px',
  borderBottomLeftRadius: '18px',

  '&:hover': {
    backgroundColor: '#FFD600',
  },

  ...(active && {
    backgroundColor: '#FFD600',
  }),
}))

const StyleRotateIcon = styled('img')(({ open }) => ({
  marginLeft: '80px',
  transition: '0.3s',
  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
}))

const StyleAvatar = styled(Box)({
  width: '34px',
  height: '34px',
  borderRadius: '10px',
  border: '1px solid #000000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const StyleLogo = styled('img')({
  display: 'flex',
  width: '80px',
  height: '42px',
})

const StyleDiv = styled(Box)({
  display: 'flex',
  gap: '4px',
  margin: '20px 60px 18px 20px',
})
