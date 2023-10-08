import React, { Component, useState, useEffect } from 'react'
import GetRequest from '../Utility/HttpRequests'

import Sun from '@mui/icons-material/WbSunny'
import Cloud from '@mui/icons-material/Cloud'
import Rain from '@mui/icons-material/WaterDrop'
import Snow from '@mui/icons-material/Snowboarding'
import Thunderstorm from '@mui/icons-material/Thunderstorm'
import Fog from '@mui/icons-material/Water'

const WeatherCodes = {
  ClearSky: 0,
  MainlyClear: 1,
  PartlyCloud: 2,
  Overcast: 3,
  Fog: 45,
  RimeFog: 46,
  DrizzleLight: 51,
  DrizzleModerate: 52,
  DrizzleDense: 53,
  FreezingDrizzleLight: 56,
  FreezingDrizzleDense: 57,
  RainSlight: 61,
  RainModerate: 63,
  RainHeavy: 65,
  FreezingRainLight: 66,
  FreezingRainHeavy: 67,
  SnowSlight: 71,
  SnowModerate: 73,
  SnowHeavy: 75,
  SnowGrains: 77,
  RainShowersSlight: 80,
  RainShowersModerate: 81,
  RainShowersViolent: 82,
  SnowShowerSlight: 85,
  SnowShowerHeavy: 86,
  Thunderstorm: 95,
  ThuderstormSlightHail: 96,
  ThunderstormHeavyHail: 99
};

function Weather() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    GetRequest("https://api.open-meteo.com/v1/forecast?latitude=46.253468&longitude=16.615731&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")
      .then(response => { setWeather(response.data); })
      .catch(error => { console.error(error); });
  }, []);

  return render(weather);
}

function GetWeatherImage(weatherCode) {
  if (weatherCode < 0 || weatherCode > 100) {
    return null;
  }
  switch (weatherCode) {
    case 0: case 1: return <Sun></Sun>
    case 2: case 3: return <Cloud></Cloud>
    case 45: return <Fog></Fog>
    case 61: case 63: case 65: case 66: case 67: case 80: case 81: case 82: return <Rain></Rain>
    case 71: case 73: case 75: case 77: return <Snow></Snow>
    case 95: case 96: case 99: return <Thunderstorm></Thunderstorm>
    default: return null;
  }
}

function ParseWeatherCode(weatherCode) {
  const state = Object.keys(WeatherCodes).find(key => WeatherCodes[key] === weatherCode);
  const image = GetWeatherImage(weatherCode);
  return [" ", image, " - ", state];
}

function render(weather) {
  return (
    <div className='WeatherPage'>
      <div className='header'><h2>WEATHER</h2></div>
      <div className="text"><p>This is an example of a live weather data retrieval.</p></div>
      <hr></hr>
      <div>
        {weather &&
          (
            <div className='text'>
              <p>Latitude: {weather['latitude']}</p>
              <p>Longitude: {weather['longitude']}</p>
              <p>Time: {weather['current_weather']['time']}</p>
              <p>Temperature: {weather['current_weather']['temperature']} C</p>
              <p>Wind speed: {weather['current_weather']['windspeed']} km/h</p>
              <p>Weather code: {weather['current_weather']['weathercode']}</p>
            </div>
          )}
        <hr></hr>
        <div className='text'> {weather && <p>Weather state: {ParseWeatherCode(weather['current_weather']['weathercode'])}</p>}</div>
      </div>
    </div>
  )
}
export default Weather