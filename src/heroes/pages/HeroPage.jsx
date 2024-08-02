import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { heroId } = useParams();

  const hero = getHeroById(heroId);

  if (!hero) {
    return <Navigate to={"marvel"} />;
  }

  console.log(hero);

  return (
    <>
      <h1>Hero Page</h1>
    </>
  );
};
