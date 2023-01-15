import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';

const SingleMovieItem = ({ movieName, movieImage, movieDescription, movieRating, onPress }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>

            <Image
                style={styles.image}
                source={{ uri: movieImage }} />

            <View style={styles.textsContainer}>
                <Text numberOfLines={1} style={styles.title}>{movieName}</Text>
                <Text numberOfLines={5} style={styles.descriptionTxt}>{movieDescription}</Text>
                <Text numberOfLines={1} style={styles.descriptionTxt}>Rating: {movieRating}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 145,
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
        flexDirection: 'row',
    },

    title: {
        fontSize: 17,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 19,
        letterSpacing: 0,
        textAlign: "left",
        color: "#141414",
        alignSelf: 'flex-start'
    },

    descriptionTxt: {
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#a0a0a0",
        width: 250,
        marginVertical: 4
    },
    
    image: {
        width: 115,
        height: 145,
        marginTop: 0,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5
    },

    textsContainer: {
        padding: 10,
        height: '100%',
    },

});

export default SingleMovieItem;
