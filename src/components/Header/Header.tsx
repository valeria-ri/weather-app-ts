import CitySearch from "../CitySearch/CitySearch";
import { HeaderProps } from "./types";

function Header({ cityOnClick }: HeaderProps) {
  return (
    <header>
      <p>Weather Now</p>
      <CitySearch cityOnClick={cityOnClick} />
    </header>
  )
}

export default Header;
