import * as actionsType from './Home.actionsTypes';

export const setProfileData = (profilePhoto, userName) => {
  return ({ type: actionsType.SET_PROFILE_DATA, profilePhoto, userName });
}

export const setLoggedIn = (isLoggedIn) => {
  return ({ type: actionsType.SET_IS_LOGGED_IN, isLoggedIn });
}