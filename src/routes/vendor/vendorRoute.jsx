import { VendorLayout } from '../../layout/vendor/VendorLayout'

export const vendorRoute = [
  {
    element: <VendorLayout />,
    children: [
      {
        index: true,
        element: <h1>Vendor Dashboard</h1>,
      },
    ],
  },
]
