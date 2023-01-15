import * as actionsType from './Movies.actionsTypes';
import MoviesRepository from '../../../model/Repository/MoviesRepository';

export const getPopularMovies = () => {
  return (dispatch) => {
    dispatch({ type: actionsType.GET_POPULAR_MOVIES })
    MoviesRepository.getPopularMovies()
      .then((result) => {
        dispatch({
          type: actionsType.GET_POPULAR_MOVIES_SUCCESS, result
        })
      })
      .catch((error) => {
        dispatch({ type: actionsType.GET_POPULAR_MOVIES_ERROR, message: error.message })
      })
  }
}

export const setMovieData = (image, title, overview, rating, id) => {
  return ({ type: actionsType.SET_MOVIE_DATA, image, title, overview, rating, id })
}


export const setAsFavorite = (image, title, overview, rating, id) => {
  return ({ type: actionsType.SET_FAVORITES_MOVIES, image, title, overview, rating, id })
}

export const removeFromFavorite = (id) => {
  return ({ type: actionsType.REMOVE_FROM_FAVORITES, id })
}

