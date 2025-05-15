import type { Routes } from "@/types";
import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { fallbackRoutes } from "./fallback";
import { privateRoutes } from "./private";
import { publicRoutes } from "./public";
import { Footer, Navbar } from "@/components/common";
import { PublicRoute } from "./guard/publicRoute";
import { ProtectedRoute } from "./guard/protectedRoute";

export const AppRouter = () => {
  /** 
    Generates route configurations based on input routes, 
    optionally wrapping private routes with ProtectedRoute.
  **/
  const generateRouteConfig = (
    routes: Routes[],
    isPrivate = false,
  ): RouteObject[] => {
    return routes.map((route) => {
      // protected routes
      const routeObject: RouteObject = {
        path: route.path,
        element: isPrivate ? (
          <ProtectedRoute>{route.element}</ProtectedRoute>
        ) : (
          <PublicRoute>{route.element}</PublicRoute>
        ),
      };

      // Recursively handle & generate children routes
      if (route.children) {
        routeObject.children = generateRouteConfig(route.children, isPrivate);
      }

      return routeObject;
    });
  };

  const publicRouteObjects = generateRouteConfig(publicRoutes);
  const privateRouteObjects = generateRouteConfig(privateRoutes, true);
  const fallbackRouteObjects = generateRouteConfig(fallbackRoutes);

  const routes = [
    ...publicRouteObjects,
    ...privateRouteObjects,
    ...fallbackRouteObjects,
  ];

  const allRoutes = useRoutes(routes);
  const hiddenNavAndFooterRoutes: string[] = ["/login", "/register", "/verify"];
  const shouldShowNavAndFooter = !hiddenNavAndFooterRoutes.includes(
    location.pathname,
  );
  return (
    <>
      {shouldShowNavAndFooter && <Navbar />}
      {allRoutes}
      {shouldShowNavAndFooter && <Footer />}
    </>
  );
};
