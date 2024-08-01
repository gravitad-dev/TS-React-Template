import { HomePage } from '@/pages'

export const publicRoutes = [
  {
    path: '/',
    element: (
      <div className="max-w-[1440px] h-100 mx-auto">
        <HomePage />
      </div>
    ),
  },
  {
    path: '/login',
    element: <div className="w-[1440px] h-100">Login</div>,
  },
  {
    path: '/register',
    element: <div className="w-[1440px] h-100">Register</div>,
  },
]
