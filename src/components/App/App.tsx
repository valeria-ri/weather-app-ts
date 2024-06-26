import { useEffect, useState } from 'react';
import './App.css';
import { API_KEY, DEFAULT_CITY_ID, MAIN_URL } from '../../utils/constants';
import { weatherFormat } from '../../utils/utils';
import { FormattedWeatherData } from '../../types/weatherData';
import Header from '../Header/Header';
import WeatherBlock from '../WeatherBlock/WeatherBlock';

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

  const requestCity = (id: number) => setCity(id);

  return (
    <div className="App">
      <Header cityOnClick={requestCity} />
      <WeatherBlock weather={weather} />
    </div>
  );
}

export default App;
