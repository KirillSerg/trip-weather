import { LocationResponse } from "../types/common";

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
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/38.9697,-77.385/[date1]/[date2]?key=YOUR_API_KEY
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[city]/[date1]/[date2]?unitGroup=metric&include=days&key=YOUR_API_KEY&contentType=json
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[city]/today?unitGroup=metric&include=days&key=YOUR_API_KEY&contentType=json

// "/38.9697,-77.385?include=days&key=HKDSKHGNYCSEBRB76GB6KKE9V&contentType=json"
export const getForecast = async (location: string, period: string) => {
  const response = await fetch(
    `${WEATHER_URL}/${location}/${period}?unitGroup=metric&include=days&key=${WEATHER_KEY}&contentType=json`, { method: "GET" }
  );
  const data = await response.json();
  return data;
}

export const getCurrentWeather = async (location: string) => {
  const response = await fetch(
    `${WEATHER_URL}/${location}/today?include=days&key=${WEATHER_KEY}&contentType=json`, { method: "GET" }
  );
  const data = await response.json();
  console.log(data)
  return data;
}