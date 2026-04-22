import { useState } from 'react'
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Collapse,
  styled,
} from '@mui/material'
import { AvatarIcon, LogoIcon, ModerationIcon } from '../../assets/icons/index'
import { SIDEBAR_ADMIN, SIDEBAR_ADMIN_MODARATION, SIDEBAR_VENDOR } from '../../utils/constants'

export const Sidebar = ({ role = 'admin', active, onChange, props }) => {
  const [open, setOpen] = useState(false)

  const menu = role === 'admin' ? SIDEBAR_ADMIN : SIDEBAR_VENDOR

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
        {menu.map(({ text, icon }) => (
          <StyleMenuItem key={text} active={active === text ? 1 : 0} onClick={() => onChange(text)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
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
                {SIDEBAR_ADMIN_MODARATION.map(({ text, icon }) => (
                  <StyleSubItem
                    key={text}
                    active={active === text ? 1 : 0}
                    onClick={() => onChange(text)}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
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
  marginTop: '30px',
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
