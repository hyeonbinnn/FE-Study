import { createStore, combineReducers, applyMiddleware } from 'redux';
import PromiseMiddleware from 'redux-promise';
import { thunk } from 'redux-thunk';
import { loginUser } from './reducer/reducers';

const rootReducer = combineReducers({
  loginUser,
});

const createStoreWithMiddleware = applyMiddleware(PromiseMiddleware, thunk)(createStore);

const store = createStoreWithMiddleware(
  rootReducer,
  window.__Redux_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
