import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/ui/Sidebar'
import { styled, Box } from '@mui/material'

export const AdminLayout = () => (
  <StyledContainer>
    <Sidebar />

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
