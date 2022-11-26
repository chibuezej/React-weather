import './App.css';
import { WEATHER_API__URL, WEATHER_API__KEY } from './components/api';
import CurrentWeather from './components/current-weather/current-weather';
import Search from './components/search/search';
import {useState} from "react";
import ForeCast from './components/forecast/forecast';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API__URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API__KEY}&units=metric`);
    const forecastfetch = fetch(`${WEATHER_API__URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API__KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastfetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forecastResponse });
    })
    .catch((err) => console.log(err));
  }

  console.log(currentWeather);
  console.log(forecast);
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && < ForeCast data={forecast} />} 
    </div>
  );
}

export default App;
