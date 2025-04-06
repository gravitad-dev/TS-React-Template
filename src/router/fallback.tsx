import { NotFoundPage } from "@/pages";

export const fallbackRoutes = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
