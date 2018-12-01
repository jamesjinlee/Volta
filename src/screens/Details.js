import React, {Component} from 'react';
import { View, Text } from 'react-native';

export default class DetailsScreen extends Component {
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'no name listed');
    const city = navigation.getParam('city', 'no city listed');
    const state = navigation.getParam('state', 'no state listed');
    const status = navigation.getParam('status', 'n/a');
    const street_address = navigation.getParam('street_address', 'no street address listed');
    const zip_code = navigation.getParam('zip_code', 'no zip code listed');
    return (
      <View>
        <Text style={{ fontSize: 20}}>name: {name}</Text>
      <Text style={{ fontSize: 20}}>street address: {street_address}</Text>
    <Text style={{ fontSize: 20}}>city: {city}</Text>
  <Text style={{ fontSize: 20}}>state: {state}</Text>
<Text style={{ fontSize: 20}}>zipcode: {zip_code}</Text>
<Text style={{ fontSize: 20}}>status: {status}</Text>

      </View>
    );
  }
}
