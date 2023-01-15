import * as actionTypes from '../actions/Home.actionsTypes.js';

const INITIAL_STATE = {
    profilePhoto:  null,
    userName: null,
    userLoggedIn: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case actionTypes.SET_PROFILE_DATA:
            return {
                ...state,
                profilePhoto: action.profilePhoto,
                userName: action.userName,
                userLoggedIn: true
            }

        case actionTypes.SET_IS_LOGGED_IN:
            return {
                ...state,
                userLoggedIn: action.isLoggedIn
            }

        default:
            return state;
    }
}

