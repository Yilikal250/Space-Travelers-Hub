import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dragonsReducer from './Dragons/dragons';
import RocketsReducer from './Rockets/Rockets';

const RootReducer = combineReducers({
  rockets: RocketsReducer,
  dragons: dragonsReducer,
});

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
