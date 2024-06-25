import CitySearch from "../Search/Search";
import { HeaderProps } from "./types";

function Header({ onChange }: HeaderProps) {
  return (
    <header>
      <p>Weather Now</p>
      <CitySearch />
    </header>
  )
}

export default Header;
