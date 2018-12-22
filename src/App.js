import React, { Component, StyleSheet } from 'react';
import { View } from 'react-native';
import firebase, { auth } from 'firebase';
import { Header, Button, Spinner } from './components/common';
import MapContainer from './components/MapContainer';
import MapView from 'react-native-maps';


class App extends Component {
    state = { loggedIn: null } 


    render() {
        return (
            <View style={styles.container}>
                <Header headerText="Journey" />
                <MapContainer />
            </View>
        );
    }
}

export default App;
