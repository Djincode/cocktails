import React, { useState, useEffect } from "react";
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'


const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [originalCocks, setOriginalCocks] = useState([]);
  const fetchedData= async ()=>{
   const data= await(await fetch(url)).json();
   const drinks = data.drinks;
   setCocktails(drinks);
   setOriginalCocks(drinks);


  }
  useEffect(()=>{
    fetchedData()
  },[])

  const filter = (value)=>{
   const filtered = cocktails.filter((cocktail)=>{
    return cocktail.strDrink.toUpperCase().includes(value.toUpperCase());
    
   })
   setCocktails(filtered)

   if(value.length === 0){
    setCocktails(originalCocks)
   }
  }
  return (
    <main>
      <SearchForm filter={filter}/>
      <CocktailList cocktails={cocktails}/>
     
    </main>
  );
};

export default Home;
