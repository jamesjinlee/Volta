import React, {Component} from 'react';
import {View, TouchableOpacity, FlatList, Text, ScrollView, StyleSheet} from 'react-native';
import { getStations } from '../services/FetchStations';

import {ListItem, Icon} from 'react-native-elements'
import { withNavigation } from 'react-navigation';


class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.itemPress = this.itemPress.bind(this);
  }
  itemPress(data) {
    console.log('called');
    this.props.navigation.navigate('Details', data);
  }


  render() {

    return(
      <ScrollView style = {styles.ResultsContainer}>

        {this.props.DisplayStations.map((data, i) => {
          return(
            <ListItem style={styles.listItem}
              subtitleStyle = {{ color: '#A8A8A8' }}
              key={i}
              title = {data.name}
              subtitle={data.city + ", " + data.state}
              onPress={() => this.itemPress(data)}
              rightIcon = <Icon
  name='chevron-right'
  type='entypo'
/>
            />
        )
          })
        }
     </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    marginTop: 5,

  },
  ResultsContainer: {
    padding: 10,
    height: '100%',
    // backgroundColor: '#E7E7E7',
    backgroundColor: 'powderblue',

    // justifyContent: 'space-between',
  },
});

export default withNavigation(SearchResults);
