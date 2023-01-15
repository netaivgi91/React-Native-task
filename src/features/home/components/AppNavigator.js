import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './Home'
import MoviesList from './../../movies/components/MoviesList'
import Movie from './../../movies/components/Movie'
import UsersFavoriteMovies from './../../movies/components/UsersFavoriteMovies'

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },
    },
    MoviesList: {
        screen: MoviesList,
        navigationOptions: {
            header: null,
        },
    },
    Movie: {
        screen: Movie,
        navigationOptions: {
            header: null,
        },
    },
    UsersFavoriteMovies:{
        screen: UsersFavoriteMovies,
        navigationOptions: {
            header: null,
        },
    }
},
    {
        navigationOptions: {
            initialRouteName: 'Home',
            header: null,
        }
    })

export default AppNavigator;
