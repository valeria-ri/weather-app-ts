import cities from "../data/city.list.json";
import { City } from "../types/city";

export const API_KEY: any = process.env.REACT_APP_WEATHER_API_KEY;

export const MAIN_URL: string = 'https://api.openweathermap.org/data/2.5/';

export const DEFAULT_CITY_ID: number = 498817;

export const TYPED_CITIES: City[] = cities as City[];