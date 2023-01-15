import { combineReducers } from 'redux';
import home from '../features/home/reducers/HomePage.reducer';
import movies from '../features/movies/reducers/Movies.reducer';

const appReducer = combineReducers({
  home,
  movies,
});

export default (state, action) => {
  return appReducer(state, action);
}

