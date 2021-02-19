export const initialState = {
  basket: [],
};

// Selector

export const getBasketTotalPrice = (basket) =>
  basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET':

    default:
      return state;
  }
};

export default reducer;
