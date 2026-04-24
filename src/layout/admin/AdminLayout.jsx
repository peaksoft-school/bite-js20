import { Outlet } from 'react-router'
import { Header } from '../Header'
import { Sidebar } from '../../components/ui/Sidebar'

export const AdminLayout = () => (
  <>
    <Header />
    <Sidebar />
    <Outlet />
  </>
)
