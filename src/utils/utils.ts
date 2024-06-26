import { WeatherData } from "../types/weatherData"

const pressureFormat = (pressure: number) => Math.round(pressure * 0.750062);

export const weatherFormat = (data: WeatherData) => {
  return {
    city: data.name,
    country: data.sys.country,
    temp: Math.round(data.main.temp),
    tempMin: Math.round(data.main.temp_min),
    tempMax: Math.round(data.main.temp_max),
    humidity: Math.round(data.main.humidity),
    pressure: pressureFormat(data.main.pressure),
    weather: data.weather[0].description,
    icon: data.weather[0].icon,
    windSpeed: Math.round(data.wind.speed),
    windDeg: data.wind.deg,
  }
};
