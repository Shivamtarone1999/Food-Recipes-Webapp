import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Recipes from './Components/Recipes';
import Axios from 'axios';


function App() {

  const [search, setSearch] = useState("chiken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "85a5fe2d";
  const APP_KEY = "e19f8c72aee6de4ad7afc6ca98c5ebb5";

  useEffect(() => {
    getRecipe();
  }, [])

  const getRecipe = (async () => {
    const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipes(result.data.hits);
  })

  const onInputChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  const onSearchClick = () => {
    getRecipe();
  }

  return (
    <div className="app">
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick} />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
