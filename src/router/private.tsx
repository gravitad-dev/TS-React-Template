export const privateRoutes = [
  {
    path: '/dashboard',
    element: (
      <div className="max-w-[1440px] h-100">
        <h1 className="text-2xl">Dashboard</h1>
      </div>
    ),
    children: [
      {
        path: 'overview',
        element: (
          <div className="">
            <h1 className="text-3xl text-black">Overview</h1>
          </div>
        ),
      },
    ],
  },
]
