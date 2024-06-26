import { WeatherData } from "../types/weatherData"

const pressureFormat = (pressure: number) => Math.floor(pressure * 0.750062);

export const weatherFormat = (data: WeatherData) => {
  return {
    city: data.name,
    country: data.sys.country,
    temp: data.main.temp,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    humidity: data.main.humidity,
    pressure: pressureFormat(data.main.pressure),
    weather: data.weather[0].description,
    icon: data.weather[0].icon,
    windSpeed: data.wind.speed,
    windDeg: data.wind.deg,
  }
};
