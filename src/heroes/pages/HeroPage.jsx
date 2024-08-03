import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to={"marvel"} />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__fadeInLeft">
        <img
          src={`/assets/heroes/${heroId}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: {hero.alter_ego}</b>
          </li>

          <li className="list-group-item">
            <b>Publisher: {hero.publisher}</b>
          </li>

          <li className="list-group-item">
            <b>First Appearance: {hero.first_appearance}</b>
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button onClick={onNavigateBack} className="btn btn-outline-primary">
          Regresar
        </button>
      </div>
    </div>
  );
};
