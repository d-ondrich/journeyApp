import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import MapView from 'react-native-maps';

class MapContainer extends Component {
    state = { email: '', password: '', error: '', loading: false };


    render() {
        return (
            <Card>
                <CardSection>
                
                </CardSection>
                <MapView
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

  // const styles = {
  //     errorTextStyle: {
  //         fontSize: 20,
  //         alignSelf: 'center',
  //         color: 'red'
  //     }
  // };

export default MapContainer;
