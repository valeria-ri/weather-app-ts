import { ChangeEvent, useState } from "react";
import { City } from "../../types/city";
import { TYPED_CITIES } from "../../utils/constants";
import { CitySearchProps } from "./types";

function CitySearch({ cityOnClick }: CitySearchProps) {
  const [query, setQuery] = useState<string>("");
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const matchingCities = TYPED_CITIES.filter((city: City) =>
        city.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
      setFilteredCities(matchingCities);
    } else {
      setFilteredCities([]);
    }
  };

  const handleSelectCity = (cityId: number) => {
    cityOnClick(cityId);
    setQuery("");
    setFilteredCities([]);
  };

  const handleInputFocus = () => setIsInputFocused(true);

  const handleInputBlur = () => setIsInputFocused(false);

  return (
    <div>
      <input
        placeholder="City..."
        type="text"
        name="city"
        value={query || ""}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {isInputFocused && query && (
        <ul>
          {filteredCities.map((city, index) => (
            <li key={index} onClick={() => handleSelectCity(city.id)}>
              <p>{city.name}</p>
              <p>{city.country}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CitySearch;
