import React from "react";
import Cocktail from "./Cocktail";

const CocktailList = ({cocktails}) => {
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {
          cocktails.map((cocktail)=>{
            return <Cocktail key={cocktail.idDrink} cocktail={cocktail}/>
          })
        }
      </div>
    </section>
  );
};

export default CocktailList;
