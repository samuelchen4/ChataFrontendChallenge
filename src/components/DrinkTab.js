import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toHome } from '../state/actions';

const DrinkTab = () => {
  const dispatch = useDispatch();
  const alcohol = useSelector((state) => state.currentAlcohol);
  const cocktailList = useSelector((state) => state.cocktailList);
  const [cocktailListDisplay, setCocktailListDisplay] = useState('');

  useEffect(() => {
    if (cocktailList.length) renderCocktails();
  }, [cocktailList]);

  //render list of cocktails
  const renderCocktails = () => {
    setCocktailListDisplay(
      cocktailList.map((cocktail) => {
        const name = cocktail.strDrink;
        return <p key={cocktail.idDrink}>{name}</p>;
      })
    );
  };

  return (
    <div className='main-container'>
      <h1>{alcohol}</h1>
      <div>
        <section className='cocktail-picture'>
          {/* <img src='' alt='' /> */}
        </section>
        <section className='cocktails-ingredents'>
          <p>List of possible cocktails</p>
          {cocktailListDisplay}
          <button onClick={() => dispatch(toHome())}>to home</button>
        </section>
      </div>
    </div>
  );
};

export default DrinkTab;
