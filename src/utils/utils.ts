import { WeatherData } from "../types/weatherData"

export const weatherFormat = (data: WeatherData) => {
  return {
    city: data.name,
    country: data.sys.country,
    temp: data.main.temp,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    weather: data.weather.map((weather) => weather.description),
    windSpeed: data.wind.speed,
    windDeg: data.wind.deg,
  }
};
