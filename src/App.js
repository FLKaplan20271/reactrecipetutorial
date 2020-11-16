import React, { useEffect } from 'react';
//<!--import logo from './logo.svg';-->
import './App.css';

const App = () => {
  const APP_ID = "5a5e9826";
  const APP_KEY = "e1212c585972fd1b76046045a56cf850";
 

  useEffect( () => { getRecipes() },[]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
    console.log(data.hits);
  };

  return (
    <div className="App">
       <form className="search-form">
        <input className="search-bar" type = "text"/>
        <button className = "search-button" type = "submit" >
            Search
        </button>
      </form>

    </div>
  );
};

export default App;
