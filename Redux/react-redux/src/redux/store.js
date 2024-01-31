import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { goodsReducer } from './reducers/reducers';
import { stockReducer } from './reducers/reducers';

const rootReducer = combineReducers({
  goodsReducer,
  stockReducer,
});

const store = createStore(rootReducer);

export default store;
