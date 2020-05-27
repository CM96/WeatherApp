/* eslint-disable prettier/prettier */
/**
 * Author: Chris Munoko
 * MAIN COMPONENT
 */
import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

class InputSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: ' ',
    };
  }
  onChangeLoc = (location)=>{
    this.setState({location});
  }
  // componentDidMount= ()=>{
  //   this.setState({location: ' '});
  // }
  render() {
    const {onChangeLocation} = this.props;
    return (
      <View style={styles.searchContainer}>
        <TextInput onChangeText={this.onChangeLoc} style={styles.inputS} placeholder="Enter City" />
        <TouchableOpacity
        style={styles.button}
        onPress={()=>onChangeLocation(this.state.location)}
        >
          <Icon style={styles.search} name="search" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 5,
    flexDirection: 'row',
    // backgroundI: 'b',
    justifyContent: 'center',
  },
  inputS: {
    width: '70%',
    borderBottomLeftRadius: 100 / 4,
    borderTopLeftRadius: 100 / 4,
    backgroundColor: '#eee',
    fontSize: 19,
    color: 'blue',
    padding: 10,
  },
  button:{
    width:'20%',
    backgroundColor:'#EEE',
    // borderRadius: 100 / 4,
    borderBottomRightRadius: 100/ 4,
    borderTopRightRadius: 100/ 4,
    justifyContent: 'center',
    alignItems:'center',
  },
  search:{
    color: 'black',
    fontSize: 23,
  },
});

export default InputSearch;
