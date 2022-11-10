import drinkList from '../reducers/drinkList';

//currentAlcohol
export const rum = () => {
  return {
    type: 'RUM',
  };
};

export const vodka = () => {
  return {
    type: 'VODKA',
  };
};

export const gin = () => {
  return {
    type: 'GIN',
  };
};

export const brandy = () => {
  return {
    type: 'BRANDY',
  };
};

export const champagne = () => {
  return {
    type: 'CHAMPAGNE',
  };
};

export const toHome = () => {
  return {
    type: '',
  };
};

//drinkList
export const getCocktails = (drinkList) => {
  return {
    type: 'GET_COCKTAILS',
    payload: drinkList,
  };
};
