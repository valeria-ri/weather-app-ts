import { useEffect, useState } from 'react';
import './App.css';
import { API_KEY, DEFAULT_CITY_ID, MAIN_URL } from '../../utils/constants';
import { weatherFormat } from '../../utils/utils';
import { FormattedWeatherData } from '../../types/weatherData';
import Header from '../Header/Header';

function App() {
  const [city, setCity] = useState(DEFAULT_CITY_ID);
  const [weather, setWeather] = useState<FormattedWeatherData | null>(null);

  const weatherApiUrl = `${MAIN_URL}weather?id=${city}&appid=${API_KEY}&units=metric&lang=en`;

  useEffect(() => {
    fetch(weatherApiUrl)
      .then(res => res.json())
      .then(data => {
        const formattedWeather = weatherFormat(data);
        setWeather(formattedWeather);
      })
      .catch(console.error);
  }, [city]);

  return (
    <div className="App">
      <Header />
      {
        weather && (
          <>
            <p>{weather.city}</p>
            <p>{weather.country}</p>
            <p>{weather.temp}</p>
            <p>{weather.tempMin}</p>
            <p>{weather.tempMax}</p>
            <p>{weather.humidity}</p>
            <p>{weather.pressure}</p>
            <p>{weather.weather[0]}</p>
            <p>{weather.windSpeed}</p>
            <p>{weather.windDeg}</p>
          </>
        )
      }
    </div>
  );
}

export default App;
