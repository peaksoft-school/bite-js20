import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import { PrivateAuthRoute } from './PrivateAuthRoute'
import { userRoute } from './user/userRoute'
import { adminRoute } from './admin/adminRoute'
import { vendorRoute } from './vendor/vendorRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateAuthRoute
        roles={['USER', 'GUEST', 'VENDOR']}
        element={<h1>Landing</h1>}
        fallbackPath={'/admin'}
      />
    ),
  },
  {
    path: '/auth',
    element: <h1>Auth Pages</h1>,
  },
  {
    path: '/user',
    element: <PrivateAuthRoute roles={['USER']} fallbackPath="/" />,
    children: userRoute,
  },
  {
    path: '/admin',
    element: <PrivateAuthRoute roles={['ADMIN']} fallbackPath={'/'} />,
    children: adminRoute,
  },
  {
    path: '/vendor',
    element: <PrivateAuthRoute roles={['VENDOR']} fallbackPath={'/'} />,
    children: vendorRoute,
  },
  {
    path: '*',
    element: <h1>404 Not Found</h1>,
  },
])

export const AppRoutes = () => <RouterProvider router={router} />
