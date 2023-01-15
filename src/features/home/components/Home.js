import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Image, SafeAreaView, StyleSheet,  View,  Text, TouchableOpacity } from 'react-native';
import { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { setProfileData, setLoggedIn } from '../actions/Home.actions';

const Home = (props) => {

    const {profilePhoto, userName, userLoggedIn } = useSelector(state => state.home);
    const dispatch = useDispatch();

    useEffect(() => {
        AccessToken.getCurrentAccessToken().then(
            (data) => {
                if (data) {
                    this.getPublicProfile(); 
                }
            }
        )
    }, []);

    getPublicProfile = async () => {
        const infoRequest = new GraphRequest(
            '/me?fields=id,name,picture.type(large)',
            null,
            (error, result) => {
                if (error) {
                    console.log('Error fetching data: ' + error.toString());
                } else if (result) {
                    dispatch(setProfileData(result.picture.data.url, result.name));
                }
            }
        );
        new GraphRequestManager().addRequest(infoRequest).start();
    };

    const renderProfilePicture = () => {
        return (
            <Image
                source={profilePhoto ? { uri: profilePhoto } : require("../assets/images/login.png")}
                style={styles.profileImage}/>
        )
    };

    const renderMoviesBtn = () => {
        return (
            <TouchableOpacity style={styles.moviesBtn}
                onPress={() => { props.navigation.navigate('MoviesList'); }}>
                <Text style={styles.moviesBtnTxt}>Movies List</Text>
            </TouchableOpacity>
        )
    };

    return (
        <SafeAreaView style={styles.safeAreaView} >

            <Image
                style={styles.logo}
                source={require('../assets/images/logo.png')} />

            <View style={styles.welcomeRow}>
                <Text style={styles.welcomeTxt}>Welcome</Text>
                <Text style={styles.welcomeTxt}>{`${userName  && userLoggedIn ? userName : "Stranger"}!`}</Text>
            </View>

            { renderProfilePicture()}

            <View style={styles.loginView}>

                {userLoggedIn ? renderMoviesBtn() : null}

                <LoginButton
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                console.log("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                console.log("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        this.getPublicProfile();
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => {
                        console.log("logout");
                        dispatch(setLoggedIn(false));
                    }} />

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: "#ffff",
        flex: 1,
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
    loginView: {
        flex: 1,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 40
    },
    welcomeRow: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20
    },
    welcomeTxt: {
        fontSize: 20,
        marginEnd: 5
    },
    profileImage: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        marginTop: 25,
        borderRadius: 150
    },
    moviesBtn: {
        flex:1,
        alignSelf: 'center',
        width: 190,
        height: 30,
        marginBottom: 25,
        backgroundColor: "red",
        borderRadius: 3
    },
    moviesBtnTxt: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 5
    }
});

export default Home;
