import WeatherBlock from "../WeatherBlock/WeatherBlock";
import { MainProps } from "./types";
import "./Main.css";

function Main({
  weather,
}: MainProps) {
  return (
    <main className="content">
      <WeatherBlock weather={weather} />
    </main>
  )
};

export default Main;
