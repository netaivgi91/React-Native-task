import * as actionTypes from '../actions/Movies.actionsTypes.js';

const INITIAL_STATE = {
    popularMovies: null,
    isLoading: false,
    moviePoster: null,
    movieTitle: null,
    movieOverview: null,
    movieRating: null,
    movieId: null,
    favoriteMovies: {},
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case actionTypes.GET_POPULAR_MOVIES:
            return {
                ...state,
                isLoading: true
            }

        case actionTypes.GET_POPULAR_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                popularMovies: action.result

            }

        case actionTypes.GET_POPULAR_MOVIES:
            return {
                ...state,
                isLoading: false

            }
        case actionTypes.SET_MOVIE_DATA:
            return {
                ...state,
                moviePoster: action.image,
                movieTitle: action.title,
                movieOverview: action.overview,
                movieRating: action.rating,
                movieId: action.id
            }

        case actionTypes.SET_FAVORITES_MOVIES:{
            const favoriteMovies = state.favoriteMovies;

            if (!favoriteMovies) {
                favoriteMovies = {};
            }

            favoriteMovies[action.id] = {
                moviePoster: action.image,
                movieTitle: action.title,
                movieOverview: action.overview,
                movieRating: action.rating,
                movieId: action.id
            }
            return {
                ...state,
                favoriteMovies
            }
        }

        case actionTypes.REMOVE_FROM_FAVORITES:
            const favoriteMovies = state.favoriteMovies;

            delete favoriteMovies[action.id];

            return {
                ...state,
                favoriteMovies
            }



        default:
            return state;
    }
}

