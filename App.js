/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/**
 * Author: Chris Munoko
 * MAIN COMPONENT
 */
import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import InputSearch from './components/InputSearch';//input form
// import Location from './components/Location';//location
import WeatherInfo from './components/WeatherInfo';//weather related information

const key = '0b8d4666a1fe2cb39aff87ff966f3a34'; //open weathermap key

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: 'London',
      weatherInfo:{
        temperature:0,
        feelsLike:0,
        country:'UK',
        weatherCondition:' ',
        conditionDescription:' ',
      },
    };
  }
  handeBackgroundChange= () => {
    let {weatherCondition:condition} = this.state.weatherInfo;
     let background;
    switch (condition) {
      case 'Clouds':
        background = require('./images/clear1.jpg');
        break;
      case 'Snow':
        background = require('./images/snow1.jpeg');
        break;
      case 'Rain':
        background = require('./images/rain2.jpeg');
        break;
      case 'Drizzle':
        background = require('./images/rain3.jpeg');
        break;
      case 'Light Rain':
        background = require('./images/rain1.jpeg');
        break;
      default:
        background = require('./images/clear1.jpg');
    }
    return background;

  }

  handleUpdate = location =>{
    if (!location) {return;}
    this.setState({location}, this.fetchTemp);
  }
  fetchTemp = () => {
    const {location} = this.state;
    const queryString = `https://api.openweathermap.org/data/2.5/find?q=${location}&units=metric&appid=${key}`;

    fetch(queryString)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          location,
          weatherInfo:{
            temperature:data.list[0].main.temp.toFixed(0),
            feelsLike:data.list[0].main.feels_like,
            country:data.list[0].sys.country,
            weatherCondition:data.list[0].weather[0].main,
            conditionDescription:data.list[0].weather[0].description,
          },  
        });
      })
      .catch(err => console.log(err));
  };
  componentDidMount= ()=> {
    this.timerID = setInterval(() => this.fetchTemp(), 500);
  }
  componentWillUnmount=()=>{
    clearInterval(this.timerID);
  }
  render() {
    const {weatherCondition} = this.state.weatherInfo;
    let condition=this.handeBackgroundChange(weatherCondition);
    return (
      <View style={styles.container}>
        <ImageBackground
        source={condition}
        style={styles.image}>
          <InputSearch onChangeLocation={this.handleUpdate} />
          <WeatherInfo weatherInformation={this.state.weatherInfo} location={this.state.location}/>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //takes up entire screen
  },
  image: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
  },

});

export default App;
