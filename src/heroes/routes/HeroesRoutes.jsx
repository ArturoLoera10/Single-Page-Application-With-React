import { Navigate, Outlet } from "react-router-dom";

import { MarvelPage, DcPage, SearchPage, HeroPage } from "../pages";
import { Navbar } from "../../ui";

export const childrenRoutes = [
  {
    path: "/marvel",
    element: <MarvelPage />,
  },
  {
    path: "/dc",
    element: <DcPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/hero",
    element: <HeroPage />,
  },
  {
    path: "/*",
    element: <Navigate to={"marvel"} />,
  },
];

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
