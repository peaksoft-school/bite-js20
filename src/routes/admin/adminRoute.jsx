import { AdminLayout } from '../../layout/admin/AdminLayout'

export const adminRoute = [
  {
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <h1>Admin Dashboard</h1>,
      },
      {
        path: 'users',
        element: <h1>Users</h1>,
      },
      {
        path: 'settings',
        element: <h1>Settings</h1>,
      },
    ],
  },
]
