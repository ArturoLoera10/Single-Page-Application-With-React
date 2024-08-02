import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LoginPage } from "../auth";
import { childrenRoutes, HeroesRoutes } from "../heroes/routes/HeroesRoutes";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HeroesRoutes />,
    children: childrenRoutes,
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
