import WeatherBlock from "../WeatherBlock/WeatherBlock";
import { MainProps } from "./types";

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
