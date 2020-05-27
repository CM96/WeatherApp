/**
 * Author: Chris Munoko
 * MAIN COMPONENT
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import Time from '../time';
class Clock extends Component {
  // let date= new Date();
  // let time = new Time(date.getHours(),)
  render() {
    //   const time=
    return (
      <View style={styles.searchContainer}>
        <Text style={styles.clock} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  clock: {
    width: '80%',
    borderRadius: 100 / 3,
    backgroundColor: '#eee',
    fontSize: 19,
    color: 'blue',
    borderColor: 'blue',
    borderWidth: 2,
    padding: 10,
  },
});
export default Clock;
