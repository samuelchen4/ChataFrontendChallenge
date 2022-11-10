const currentAlcohol = (state = '', action) => {
  switch (action.type) {
    case 'RUM':
      return (state = 'rum');
    case 'VODKA':
      return (state = 'vodka');
    case 'GIN':
      return (state = 'gin');
    case 'BRANDY':
      return (state = 'brandy');
    case 'CHAMPAGNE':
      return (state = 'champagne');
    case '':
      return (state = '');
    default:
      return state;
  }
};

export default currentAlcohol;
