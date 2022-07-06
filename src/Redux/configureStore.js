import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MissionsReducer from './Missions/missions';

const RootReducer = combineReducers({
  missions: MissionsReducer,
});

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
