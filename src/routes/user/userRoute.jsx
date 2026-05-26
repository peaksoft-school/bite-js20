import { UserLayout } from '../../layout/user/UserLayout'

export const userRoute = [
  {
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <h1>User Dashboard</h1>,
      },
    ],
  },
]
