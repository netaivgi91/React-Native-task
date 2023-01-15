import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaView, StyleSheet, View, Text, FlatList, Image , TouchableOpacity} from 'react-native';
import { getPopularMovies } from '../actions/Movies.actions';
import SingleMovieItem from './SingleMovieItem';

const UsersFavoriteMovies = (props) => {

    const { favoriteMovies } = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularMovies());
    }, []);

    return (
        <SafeAreaView style={styles.safeAreaView} >

            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtnContainer} onPress={() => props.navigation.pop()}>
                    <Image
                        style={styles.backBtn}
                        source={require("../assets/images/backbtn.png")} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>My Favorite movies</Text>

            </View>

            <FlatList
                data={Object.values(favoriteMovies)}
                style={{ backgroundColor: "#f2f2f2", marginTop: 7 }}
                renderItem={({ item }) =>
                    <SingleMovieItem
                        movieImage={item.moviePoster}
                        movieName={item.movieTitle}
                        movieDescription={item.movieOverview}
                        movieRating={item.movieRating}
                    />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    safeAreaView: {
        backgroundColor: "#ffff",
        flex: 1,
    },

    headerTitle: {
        width: "82%",
        height: 30,
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    
    backBtnContainer: {
        width: "10%",
    },

    backBtn: {
        width: 20,
        height: 20,
        marginTop: 23,
        marginStart: 5
    },

    header: {
        flexDirection: 'row'
    }

})

export default UsersFavoriteMovies;
