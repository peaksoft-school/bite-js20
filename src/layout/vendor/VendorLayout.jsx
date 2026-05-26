import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/ui/Sidebar'
import { Box, styled } from '@mui/material'

export const VendorLayout = () => (
  <StyledContainer>
    <Sidebar role="vendor" />

    <StyledContent>
      <Outlet />
    </StyledContent>
  </StyledContainer>
)

const StyledContainer = styled(Box)({
  display: 'flex',
})

const StyledContent = styled(Box)({
  marginLeft: '280px',
  width: '100%',
  padding: '20px',
})
