import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RocketsReducer from './Rockets/Rockets';

const RootReducer = combineReducers({
  rockets: RocketsReducer,
});

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
