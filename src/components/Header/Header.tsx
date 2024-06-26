import CitySearch from "../CitySearch/CitySearch";
import { HeaderProps } from "./types";
import "./Header.css";

function Header({ cityOnClick }: HeaderProps) {
  return (
    <header className="header">
      <p className="header__title">Weather<span>Now</span></p>
      <CitySearch cityOnClick={cityOnClick} />
    </header>
  )
}

export default Header;
