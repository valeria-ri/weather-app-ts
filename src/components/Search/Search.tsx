import { ChangeEvent, useState } from "react";
import { City } from "../../types/city";
import { TYPED_CITIES } from "../../utils/constants";

function CitySearch() {
  const [query, setQuery] = useState('');
  const [filteredCities, setFilteredCities] = useState<City[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const matchingCities = TYPED_CITIES
        .filter((city: City) => city.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5);
      setFilteredCities(matchingCities);
    } else {
      setFilteredCities([]);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        name="city" 
        value={query || ''} 
        onChange={handleInputChange} 
      />
      <ul>
        {
          filteredCities.map((city, index) => (
            <li key={index}>{city.name}, {city.country}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default CitySearch;
