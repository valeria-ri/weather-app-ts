import { ChangeEvent, useState } from "react";
import { City } from "../../types/city";
import { TYPED_CITIES } from "../../utils/constants";
import { CitySearchProps } from "./types";
import FilteredCities from "../FilteredCities/FilteredCities";

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
    <div className="city-search">
      <input
        className="city-search__input"
        placeholder="City..."
        type="text"
        name="city"
        value={query || ""}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {isInputFocused && query && (
        <section className="city-search__result">
          {filteredCities.length === 0 ? (
            <p className="city-search__info">No results</p>
          ) : (
            <FilteredCities
              filteredCities={filteredCities}
              handleSelectCity={handleSelectCity}
            />
          )}
        </section>
      )}
    </div>
  );
}

export default CitySearch;
