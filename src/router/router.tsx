import { Footer } from '@/components/common/'
import Navbar from '@/components/common/Navbar'
import type { Routes } from '@/types'
import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import { fallbackRoutes } from './fallback'
import { ProtectedRoute } from './guard/ProtectedRoute'
import { privateRoutes } from './private'
import { publicRoutes } from './public'

export const AppRouter = () => {
  /** 
    Generates route configurations based on input routes, 
    optionally wrapping private routes with ProtectedRoute.
  **/
  const generateRouteConfig = (
    routes: Routes[],
    isPrivate = false
  ): RouteObject[] => {
    return routes.map((route) => {
      // protected routes
      const routeObject: RouteObject = {
        path: route.path,
        element: isPrivate ? (
          <ProtectedRoute>{route.element}</ProtectedRoute>
        ) : (
          route.element
        ),
      }

      // Recursively handle & generate children routes
      if (route.children) {
        routeObject.children = generateRouteConfig(route.children)
      }

      return routeObject
    })
  }

  const publicRouteObjects = generateRouteConfig(publicRoutes)
  const privateRouteObjects = generateRouteConfig(privateRoutes, true)
  const fallbackRouteObjects = generateRouteConfig(fallbackRoutes)

  const routes = [
    ...publicRouteObjects,
    ...privateRouteObjects,
    ...fallbackRouteObjects,
  ]

  const allRoutes = useRoutes(routes)

  return (
    <>
      <Navbar />
      {allRoutes}
      <Footer />
    </>
  )
}
