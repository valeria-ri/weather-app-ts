import { City } from "../../types/city";

export type FilteredCitiesProps = {
  filteredCities: City[],
  handleSelectCity: (cityId: number) => void,
};
