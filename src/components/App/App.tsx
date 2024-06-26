import React from "react";
import { API_KEY, DEFAULT_CITY_ID, MAIN_URL } from "../../utils/constants";
import { weatherFormat } from "../../utils/utils";
import { FormattedWeatherData } from "../../types/weatherData";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import "./App.css";

function App() {
  const [city, setCity] = React.useState(DEFAULT_CITY_ID);
  const [weather, setWeather] = React.useState<FormattedWeatherData | null>(null);

  const weatherApiUrl = `${MAIN_URL}weather?id=${city}&appid=${API_KEY}&units=metric&lang=en`;

  React.useEffect(() => {
    fetch(weatherApiUrl)
      .then((res) => res.json())
      .then((data) => {
        const formattedWeather = weatherFormat(data);
        setWeather(formattedWeather);
      })
      .catch(console.error);
  }, [city]);

  const requestCity = (id: number) => setCity(id);

  return (
    <div className="App">
      <div className="page">
        <Header cityOnClick={requestCity} />
        <Main weather={weather} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
