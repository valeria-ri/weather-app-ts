import { WeatherBlockProps } from "./types";
import "./WeatherBlock.css";

function WeatherBlock({ weather }: WeatherBlockProps) {
  const weatherIconSrc: string = `https://openweathermap.org/img/wn/${weather?.icon}@2x.png`;

  return (
      <section className="weather">
        {!weather ? ( 
          <div className="weather__not-found">
            <h1 className="weather__not-found-text">No data</h1>
          </div>
        ) : (
          <>
            <div className="weather__geo">
              <h1 className="weather__geo-text">
                {weather?.city}, {weather?.country}
              </h1>
            </div>
            <div className="weather__conditions">
              <img className="weather__icon" src={weatherIconSrc} alt="" />
              <div className="weather__conditions-info">
                <div className="weather__temps">
                  <h3 className="weather__temp weather__temp_secondary">{weather?.tempMin}&deg;C</h3>
                  <h2 className="weather__temp weather__temp_main">{weather?.temp}&deg;C</h2>
                  <h3 className="weather__temp weather__temp_secondary">{weather?.tempMax}&deg;C</h3>
                </div>
                <div className="weather__weather">
                  <p className="weather__weather-text">{weather?.weather}</p>
                </div>
              </div>
            </div>
            <div className="weather__details-container">
              <ul className="weather__details">
                <li className="weather__detail">
                  <p className="weather__detail-title">Pressure</p>
                  <p className="weather__detail-info">{weather?.pressure}<span>mmHg</span></p>
                </li>
                <li className="weather__detail">
                  <p className="weather__detail-title">Wind</p>
                  <p className="weather__detail-info">{weather?.windSpeed}<span>m/s</span></p>
                </li>
                <li className="weather__detail">
                  <p className="weather__detail-title">Humidity</p>
                  <p className="weather__detail-info">{weather?.humidity}%</p>
                </li>
              </ul>
            </div>
          </>
        )}
      </section>
  );
}

export default WeatherBlock;
