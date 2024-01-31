import { PLUS, MINUS, SALE, SOLD_OUT } from '../actions/actions';

const initialState = {
  stock: 10,
  goods: 1,
  message: '판매중!!',
};

export const goodsReducer = (state = initialState, action) => {
  console.log(action);
  console.log(action.type);
  console.log(state);
  switch (action.type) {
    case PLUS:
      return {
        ...state,
        stock: state.stock - 1,
        goods: state.goods + 1,
      };
    case MINUS:
      return {
        ...state,
        stock: state.stock + 1,
        goods: state.goods - 1,
      };

    default:
      return state;
  }
};

export const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case SALE:
      return {
        ...state,
        message: '판매중!!',
      };
    case SOLD_OUT:
      return {
        ...state,
        message: '완판!!',
      };
    default:
      return state;
  }
};
