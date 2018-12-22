import React, { Component } from 'react';
import { Text, Dimensions } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class MapContainer extends Component {
    state = { 
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      }, 
      markerPosition: {
        latitude: 0,
        longitude: 0
      }
    };


    watchID: ?number = null;

    componentDidMount() {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = parseFloat(position.coords.latitude);
        const lon = parseFloat(position.coords.longitude);

        const initialRegion = {
          latitude: lat,
          longitude: lon,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }

        this.setState({initialPosition: initialRegion});
        this.setState({markerPosition: initialRegion});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

      this.watchID = navigator.geolocation.watchPosition((position) => {
        const lat = parseFloat(position.coords.latitude);
        const lon = parseFloat(position.coords.longitude);

        const lastRegion = {
          latitude: lat,
          longitude: lon,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }

        this.setState({initialPosition: lastRegion});
        this.setState({markerPosition: lastRegion});
      })
    }

    componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <Card style={styles.container}>
                <MapView
                  style={styles.map}
                  region={this.state.initialPosition}
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
