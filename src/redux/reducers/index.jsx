import { combineReducers } from 'redux';
import routesReducer from './routesReducer';
import errorReducer from './errorReducer';
import movieReducer from './movieReducer';

const rootReducers = combineReducers({
  errors: errorReducer,
  movies: movieReducer,
  routes: routesReducer
});

export default rootReducers;
