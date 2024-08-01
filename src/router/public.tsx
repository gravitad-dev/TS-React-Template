export const publicRoutes = [
  {
    path: '/',
    element: (
      <div className="max-w-[1440px] h-100">
        <h1 className="font-bold text-2xl">Home</h1>
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
