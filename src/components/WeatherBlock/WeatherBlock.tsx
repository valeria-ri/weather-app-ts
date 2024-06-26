import { WeatherBlockProps } from "./types";

function WeatherBlock({ weather }: WeatherBlockProps) {
  const weatherIconSrc: string = `https://openweathermap.org/img/wn/${weather?.icon}@2x.png`;

  return (
    <main>
      <section>
        {!weather ? ( 
          <div>
            <h1>Нет данных</h1>
          </div>
        ) : (
          <>
            <div>
              <h1>
                {weather?.city}, {weather?.country}
              </h1>
            </div>
            <div>
              <img src={weatherIconSrc} alt="" />
              <div>
                <div>
                  <h3>{weather?.tempMin}&deg;C</h3>
                  <h2>{weather?.temp}&deg;C</h2>
                  <h3>{weather?.tempMax}&deg;C</h3>
                </div>
                <div>
                  <p>{weather?.weather}</p>
                </div>
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <p>Pressure</p>
                  <p>{weather?.pressure}</p>
                </li>
                <li>
                  <p>Wind</p>
                  <p>{weather?.windSpeed}m/s</p>
                </li>
                <li>
                  <p>Humidy</p>
                  <p>{weather?.humidity}%</p>
                </li>
              </ul>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default WeatherBlock;
