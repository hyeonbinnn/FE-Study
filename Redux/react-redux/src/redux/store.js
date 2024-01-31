// import { combineReducers } from 'redux';
// import { createStore } from 'redux';
// import { goodsReducer } from './reducers/reducers';
// import { stockReducer } from './reducers/reducers';

// const rootReducer = combineReducers({
//   goodsReducer,
//   stockReducer,
// });

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { goodsReducer, stockReducer } from './slices/slices';

const store = configureStore({
  reducer: {
    goods: goodsReducer,
    stock: stockReducer,
  },
});

export default store;
