import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  rum,
  vodka,
  gin,
  brandy,
  champagne,
  getCocktails,
} from '../state/actions/';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const alcohol = useSelector((state) => state.currentAlcohol);
  const dispatch = useDispatch(); //dispatch calls an action

  //make api get request for cocktail list whenever currentAlcohol state changes
  useEffect(() => {
    getCocktailList();
  }, [alcohol]);

  //gets cocktails based on alcohol
  const getCocktailList = async () => {
    Axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`
    ).then((res) => {
      console.log(res);
      dispatch(getCocktails(res.data.drinks));
    });

    //put drinklist into store

    // dispatch(getCocktails(res.data.drinks));
  };

  return (
    <div className='nav-container'>
      <h1>Title</h1>
      <div className='tabs-container'>
        <p>
          <button onClick={() => dispatch(rum())} name='rum'>
            Rum
          </button>
        </p>
        <p>
          <button onClick={() => dispatch(vodka())} name='vodka'>
            Vodka
          </button>
        </p>
        <p>
          <button onClick={() => dispatch(gin())} name='gin'>
            Gin
          </button>
        </p>
        <p>
          <button onClick={() => dispatch(brandy())} name='brandy'>
            Brandy
          </button>
        </p>
        <p>
          <button onClick={() => dispatch(champagne())} name='champagne'>
            Champagne
          </button>
        </p>
      </div>
      <p className='signature'>made by Samuel</p>
    </div>
  );
};

export default Navbar;
