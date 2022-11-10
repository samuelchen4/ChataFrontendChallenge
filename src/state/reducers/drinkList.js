//reducer is state change based on action
//function that takes a state and an action

const drinkList = (state = [], action) => {
  switch (action.type) {
    case 'GET_COCKTAILS':
      return (state = action.payload);
    default:
      return state;
  }
};

// const drinkList = (state = {}, action) => {
//   switch (action.type) {
//     case 'GET_COCKTAILS':
//       return { ...state, cocktailList: action.payload };
//     default:
//       return (state.cocktailList = []);
//   }
// };

export default drinkList;
