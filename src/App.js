import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { getStations} from './services/FetchStations';

import DetailsScreen from './screens/Details'

import { createStackNavigator, createAppContainer } from 'react-navigation'

class MainScreen extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      stations: [],
      displayStations: []
    };

    this.getAllStations = this.getAllStations.bind(this);
    this.findStation = this.findStation.bind(this);
    this.search = this.search.bind(this);

  }
  componentDidMount () {
    this.getAllStations();
  }
  getAllStations() {
      getStations()
          .then((res) => {

              this.setState({
                stations: res,
                displayStations: res.splice(0, 20),
              })
        });
    }
  search(){
    console.log("hey")
  }

  findStation(name){
    var list = [];
    for (var i = 0,len = this.state.stations.length; i < len; i++) {
        if ( this.state.stations[i].state === name || this.state.stations[i].city === name || String(this.state.stations[i].zip_code) === name) { // strict equality test
            list.push(this.state.stations[i]);
        }
    }
    console.log(list);
    this.setState({
      displayStations: list
    })

  }
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Image
            style={styles.logo}
          source={require('../images/volta.png')}
        /></View>
      <View>
        <SearchBar OnSearch= {this.findStation}/>
      <Text style = {styles.stationText}> stations </Text>

      <SearchResults DisplayStations = {this.state.displayStations}/>
  </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    aspectRatio: 1.7,
    resizeMode: 'contain',
    marginLeft: 20,
    top: 10

  },
  header: {
    backgroundColor: 'powderblue',
    width: '100%',
    height: 80,
    alignItems: 'center',

  },
  stationText: {
    marginTop: 20,
    fontSize: 30,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Main',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
