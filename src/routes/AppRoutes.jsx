import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Landing</h1>,
  },
  {
    path: '/user',
    element: <h1>user</h1>,
  },
  {
    path: '/admin',
    element: <h1>Admin</h1>,
  },
  {
    path: '*',
    element: <h1>404 Not Found</h1>,
  },
])

export const AppRoutes = () => <RouterProvider router={router} />
