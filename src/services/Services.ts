import { LocationResponse } from "../types/common";

const GEO_URL = import.meta.env.VITE_API_GEO_URL;
const GEO_KEY = import.meta.env.VITE_API_GEO_KEY;

export const getCities = async (inputValue: string) => {
  const response = await fetch(
    `${GEO_URL}?minPopulation=10000&namePrefix=${inputValue}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": GEO_KEY,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    }
  );
  const data: LocationResponse = await response.json();
  return {
    options: data.data.map((city) => {
      return {
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      };
    }),
  };
};