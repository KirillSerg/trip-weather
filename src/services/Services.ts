import { LocationResponse, Weather } from "../types/common";

const GEO_URL = import.meta.env.VITE_API_GEO_URL;
const GEO_KEY = import.meta.env.VITE_API_GEO_KEY;
const WEATHER_URL = import.meta.env.VITE_API_WEATHER_URL;
const WEATHER_KEY = import.meta.env.VITE_API_WEATHER_KEY;

export const getCities = async (inputValue: string) => {
  const response = await fetch(
    `${GEO_URL}?minPopulation=10000&limit=10&namePrefix=${inputValue}`,
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

export const getForecast = async (location: string, period: string): Promise<Weather> => {
  const response = await fetch(
    `${WEATHER_URL}/${location}/${period}?unitGroup=metric&include=days&key=${WEATHER_KEY}&contentType=json`, { method: "GET" }
  );
  if (response.status === 429) {
    alert("The limit of free requests to the weather API has ended for today")
  }
  const data = await response.json();
  return data;
}

export const getCurrentWeather = async (location: string): Promise<Weather> => {
  const response = await fetch(
    `${WEATHER_URL}/${location}/today?unitGroup=metric&include=days&key=${WEATHER_KEY}&contentType=json`, { method: "GET" }
  );
  if (response.status === 429) {
    alert("The limit of free requests to the weather API has ended for today")
  }
  const data = await response.json();
  return data;
}