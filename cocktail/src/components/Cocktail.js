import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({cocktail}) => {

  const {
    strDrink: name,
    strDrinkThumb:image,
    strGlass:glass,
    strAlcoholic: alch
  } = cocktail
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alch}</p>
        {/* <Link  className="btn btn-primary btn-details">
          details
        </Link> */}
      </div>
    </article>
  );
};

export default Cocktail;
