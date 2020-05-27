/**
 * Author: Chris Munoko
 * Component to display temp and City
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {fetchData} from '../openWeatherData';

class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      town: this.props.city,
    };
  }
  fetchTemp = () => {
    fetchData(this.state.town);
  };
  render() {
    return (
      <View style={styles.searchContainer}>
        <Text />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'column',
  },
});

export default Temp;
