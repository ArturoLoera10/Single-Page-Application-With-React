import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LoginPage } from "../auth";
import { childrenRoutes, HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoutes } from "./PublicRoutes";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <LoginPage />
      // <PublicRoutes>
      // </PublicRoutes>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRouter>
        <HeroesRoutes />
      </PrivateRouter>
    ),
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
