import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { MarvelPage, DcPage } from "../heroes";
import { LoginPage } from "../auth";
import { HeroesApp } from "../HeroesApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesApp />,
    children: [
      {
        path: "marvel",
        element: <MarvelPage />,
      },
      {
        path: "dc",
        element: <DcPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "/",
        element: <Navigate to={"marvel"} />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
