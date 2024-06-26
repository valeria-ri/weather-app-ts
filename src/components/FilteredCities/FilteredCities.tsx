import { FilteredCitiesProps } from "./types";

function FilteredCities({
  filteredCities,
  handleSelectCity,
}: FilteredCitiesProps) {
  return (
    <ul>
      {filteredCities.map((city, index) => (
        <li key={index} onClick={() => handleSelectCity(city.id)}>
          <p>{city.name}</p>
          <p>{city.country}</p>
        </li>
      ))}
    </ul>
  );
}

export default FilteredCities;
