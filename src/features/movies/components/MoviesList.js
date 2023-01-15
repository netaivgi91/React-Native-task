import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaView, StyleSheet, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { getPopularMovies, setMovieData } from '../actions/Movies.actions';
import SingleMovieItem from './SingleMovieItem';

const MoviesList = (props) => {

    const { popularMovies } = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularMovies());
    }, []);

    return (
        <SafeAreaView style={styles.safeAreaView} >

            <Text style={styles.headerTitle}>Most Popular movies</Text>

            <TouchableOpacity style={styles.backBtn} onPress={() => props.navigation.pop()}>
                <Image
                    style={styles.backBtn}
                    source={require("../assets/images/backbtn.png")} />
            </TouchableOpacity>

            <FlatList
                data={popularMovies}
                style={{ backgroundColor: "#f2f2f2", marginTop: 7 }}
                keyExtractor={(_, index) => `${index}`}
                renderItem={({ item }) =>
                    <SingleMovieItem
                        movieImage={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
                        movieName={item.original_title}
                        movieDescription={item.overview}
                        movieRating={item.vote_average}
                        onPress={() => {
                            dispatch(setMovieData(`http://image.tmdb.org/t/p/w185/${item.backdrop_path}`, 
                                item.original_title, item.overview, item.vote_average, item.id));
                            props.navigation.navigate('Movie');
                        }}
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
        alignSelf: 'center',
        height: 30,
        marginTop: 20,
        fontSize: 20
    },

    backBtn: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 10,
        start: 6
    }

})

export default MoviesList;
