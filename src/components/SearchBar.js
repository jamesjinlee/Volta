import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

export default class SearchBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        text: "",
        error: false
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
      this.setState({
        text: e.nativeEvent.text
      });
    }
    handleSubmit() {
      console.log(this.state.username);
    }
  render() {
    return(
      <View
        style = {styles.container}>
      <TextInput
        style = {styles.searchBar}
        onChange={this.handleChange}
        value={this.state.text}
        placeholder= "  Enter City, State Abb., or Zipcode"

            />
      <View
        style= {styles.searchButton}
        >
      <Button
        onPress={() => {this.props.OnSearch(this.state.text)}}
        title="Search"
        color="white"
      />
  </View>
  </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center'
  },
  searchBar: {

    height: 40,
    width: '60%',
    borderColor: 'gray',
    borderWidth: 0.7
  },
  searchButton: {
    marginLeft: 20,
  },
});
