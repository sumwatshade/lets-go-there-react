import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlacesService from './services/places.service';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.status = "";
    this.placesService = new PlacesService();

    this.placesService.getNearbyPlaces({}).then((response) => {
      this.status = response.status;
      console.log(response.status)
      console.log(Object.keys(response));
      console.log(response._bodyText)
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>Service status: {this.status}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
