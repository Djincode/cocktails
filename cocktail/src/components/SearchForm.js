import React, { useState } from "react";

const SearchForm = ({filter}) => {

  const getValue = (e)=>{
const value = e.target.value
filter(value);
  }
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input onChange={getValue} type="text" name="name" id="name" />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
