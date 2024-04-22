import React, { useEffect, useState } from "react";

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=id`;

const SingleCocktail = () => {
  return (
    <section className="section cocktail-section">
      back home
      <h2 className="section-title">name</h2>
      <div className="drink">
        <img src=""></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            name
          </p>
          <p>
            <span className="drink-data">category :</span>
            category
          </p>
          <p>
            <span className="drink-data">info :</span>
            alch
          </p>
          <p>
            <span className="drink-data">glass :</span>
            glass
          </p>
          <p>
            <span className="drink-data">instructons :</span> instr
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
