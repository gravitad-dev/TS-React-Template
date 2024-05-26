import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import { HomePage } from '@/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      /// Dashboard Routes
      {
        path: 'dashboard',
        element: <HomePage />,
        children: [],
      },

      /// Auth Routes
      {
        path: 'auth',
        element: <App />,
        children: [],
      },
    ],
  },
])
