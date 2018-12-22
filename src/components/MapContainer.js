import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import MapView from 'react-native-maps';

class MapContainer extends Component {
    state = { email: '', password: '', error: '', loading: false };


    render() {
        return (
            <Card style={styles.container}>
                <MapView
                  style={styles.map}
                  region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                  }}
                />
            </Card>
        );
    }
}

  const styles = {
      container: {
        flex:  1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        height: 500,
        alignSelf: "stretch"
      }
  };

export default MapContainer;
