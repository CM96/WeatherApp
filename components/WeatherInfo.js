/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet,Text, ImageBackground, View} from 'react-native';
import weatherConditions from './weatherCond';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

class WeatherInfo extends Component {
  render() {
    const {location, weatherInformation} = this.props;
    // const {temperature, feelsLike, country, conditionDescription} = this.props;
    return (
       <View style={styles.view}>
          <View style={styles.cityInfo}>
            <Text style={styles.child_1}>{`${location}, ${weatherInformation.country}`} 
            </Text>
            <Icon size={33} name = "map-marker-alt" color="#eee" style={styles.icon}></Icon>
            {/* <Text style={{fontSize: 28, color: '#eee', marginLeft: 127 }}>{weatherInformation.weatherCondition}</Text> */}
          </View>
            {/* HAVE TO MANIPULATE THE NAME ONLY: WRAP ICON AND TEMP IN SAME VIEW*/}
            <View style={styles.tempInfo}>
              <Icon size={35} name={(typeof weatherConditions !== 'undefined' || weatherInformation) ?
                weatherConditions[weatherInformation.weatherCondition].icon : 'cloud' } 
                color = "#eee"  >
              </Icon>
              <Text style={styles.degrees}>         
                { `${weatherInformation.temperature} ° C`}
              </Text>        
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionTitle}>
                  {weatherInformation.conditionDescription}
                </Text>
                <Text style={styles.descriptionSubTitle}>
                  {weatherConditions[weatherInformation.weatherCondition].subtitle}
                </Text>
            </View>
          </View>
    );
  }
}
const styles = StyleSheet.create({
  view:{
    marginTop:20,
    // backgroundColor:'#eee',
    borderRadius: 100 / 5,
    padding: 5,
    color: 'black',
    // opacity: 0.5,
    width: '80%',
    height: '60%',
    alignItems: 'center',
  },
  cityInfo:{
    flexDirection: 'row',
    // justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  tempInfo:{
    flexDirection: 'row',
    // backgroundColor: 'blue',
    width: '90%',
    height: '30%',
    justifyContent: 'center',
    padding: 10,
  },
  icon:{
    // color: '#eee',
    marginLeft: 9,
    marginTop: 5,
  },
  degrees:{
    fontSize: 35,
    marginLeft: 10,
    marginTop: -3,
    color: 'white',
  },
  child_1: {
    fontSize: 34,
    color: '#eee',
    // marginLeft: 5,
    marginLeft: 22,
  },
  description:{
    backgroundColor: '#eee',
    opacity: 0.7,
    width: '90%',
    height: '30%',
    borderRadius: 100 / 5,
    padding: 10,
    alignItems: 'center',
  },
  descriptionTitle:{
    fontSize: 22,
  },
  descriptionSubTitle:{
    fontStyle: 'italic',
    fontSize: 23,
    marginTop: 10,
    color: '#4A777A',
  },
  
});

export default WeatherInfo;
