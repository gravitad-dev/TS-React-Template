import { NotFound } from '@/pages/NotFound'

export const fallbackRoutes = [
  {
    path: '*',
    element: <NotFound />,
  },
]
