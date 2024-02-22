import { useAtom } from "jotai";
import "./TodayForecast.css";
import { useEffect, useState } from "react";
import { getCurrentWeather } from "../../services/Services";
import { Weather } from "../../types/common";
import { selectedTripAtom, tripsAtom } from "../../Store";
import { getDayName } from "../../utilities/utility";

const TodayForecast = () => {
  const [selectedTrip] = useAtom(selectedTripAtom);
  const [trips] = useAtom(tripsAtom);
  const [currentWeather, setCurrentWeather] = useState<Weather | null>(null);

  const trip = selectedTrip || trips[0];

  useEffect(() => {
    (async () => {
      const weather = await getCurrentWeather(`${trip.lat},${trip.lon}`);
      setCurrentWeather(weather);
    })();
  }, [trip]);

  return (
    <section className="today">
      <h3>{getDayName(currentWeather?.days[0].datetime)}</h3>
      {currentWeather && (
        <div className="weather">
          <img
            src={`./weatherIcons/${currentWeather.days[0].icon}.svg`}
            alt="weather"
          />
          <h1>{Math.floor(currentWeather.days[0].temp)}</h1>
          <p>°C</p>
        </div>
      )}
      <h4 className="city">{trip.name}</h4>
    </section>
  );
};

export default TodayForecast;
