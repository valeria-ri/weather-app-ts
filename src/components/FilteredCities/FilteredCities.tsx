import { FilteredCitiesProps } from "./types";

function FilteredCities({
  filteredCities,
  handleSelectCity,
}: FilteredCitiesProps) {
  return (
    <ul className="city-search__list">
      {filteredCities.map((city, index) => (
        <li
          className="city-search__item"
          key={index}
          onClick={() => handleSelectCity(city.id)}
        >
          <p className="city-search__city">{city.name}</p>
          <p className="city-search__country">{city.country}</p>
        </li>
      ))}
    </ul>
  );
}

export default FilteredCities;
