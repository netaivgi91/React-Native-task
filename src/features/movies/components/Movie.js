import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { setAsFavorite, removeFromFavorite } from '../actions/Movies.actions';
import { ScrollView } from "react-native-gesture-handler";

const Movie = (props) => {

    const { moviePoster, movieTitle, movieOverview, movieRating, movieId, favoriteMovies } = useSelector(state => state.movies);
    const dispatch = useDispatch();

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.favoriteSun}>{Object.values(favoriteMovies).length}</Text>
                <TouchableOpacity style={styles.favoriteContainer} onPress={() => props.navigation.pop()}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/material/480/star--v1.png' }}
                        style={styles.favoriteIcon} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.backBtn} onPress={() => props.navigation.pop()}>
                <Image
                    style={styles.backBtn}
                    source={require("../assets/images/backbtn.png")} />
            </TouchableOpacity>

            <Image
                style={styles.image}
                source={{ uri: moviePoster }} />

            <ScrollView style={styles.scrollView}>

                <View style={styles.infoContainer}>
                    <Text numberOfLines={1} style={styles.title}>{movieTitle}</Text>
                    <Text style={styles.descriptionTxt}>{movieOverview}</Text>
                    <Text numberOfLines={1} style={styles.descriptionTxt}>Rating: {movieRating}</Text>
                </View>

                <TouchableOpacity style={styles.favoriteContainer}
                    onPress={() => {
                        {
                            favoriteMovies[movieId] ?
                            dispatch(removeFromFavorite(movieId)) :
                            dispatch(setAsFavorite(moviePoster, movieTitle, movieOverview, movieRating, movieId))
                        }
                    }}>
                    <Text numberOfLines={1} style={styles.favorites}>
                        {favoriteMovies[movieId] ? "Remove from favorites" : "Add to favorites "}
                    </Text>
                    <Image
                        source={{ uri: 'https://img.icons8.com/material/480/star--v1.png' }}
                        style={styles.favoriteIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.allFavoritesContainer} onPress={() => props.navigation.navigate('UsersFavoriteMovies')}>
                    <Text numberOfLines={1} style={styles.favorites}>Watch all favorites</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginVertical: 6,
        marginHorizontal: 12,
        borderRadius: 5,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.08)",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 4,
        flex: 1,
    },

    header: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    backBtn: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 3,
    },

    favoriteSun: {
        alignSelf: 'flex-end',
        marginBottom: 10,
    },

    favoriteIcon: {
        width: 20,
        height: 20,
        marginHorizontal: 5,
    },
    scrollView:{
        flex: 1
    },

    title: {
        fontSize: 20,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 19,
        letterSpacing: 0,
        textAlign: "left",
        color: "#141414",
        alignSelf: 'flex-start',
        marginBottom: 5,
        marginTop: 20
    },

    descriptionTxt: {
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#a0a0a0",
        width: "90%",
        marginVertical: 2
    },

    image: {
        width: '100%',
        height: 280,
        marginTop: 0,
        borderRadius: 5,
    },

    infoContainer: {
        marginHorizontal: 10,
        flex: 1,
        marginBottom: 20
    },

    favoriteContainer: {
        flexDirection: 'row',
    },

    favorites: {
        fontSize: 17,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 19,
        letterSpacing: 0,
        textAlign: "left",
        color: "#141414",
        marginStart: 10,
    },

    allFavoritesContainer: {
        width: 180,
        borderColor: "#141414",
        borderRadius: 5,
        borderWidth: 1,
        marginStart: 7,
        marginTop: 15
    },

});

export default Movie;
