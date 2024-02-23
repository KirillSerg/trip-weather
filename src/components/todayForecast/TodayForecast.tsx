import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { getCurrentWeather } from "../../services/Services";
import { Weather } from "../../types/common";
import { getDayName } from "../../utilities/utility";
import { onSelectTripAtom } from "../../Store";
import "./TodayForecast.css";

const TodayForecast = () => {
  const selectedTrip = useAtomValue(onSelectTripAtom);
  const [currentWeather, setCurrentWeather] = useState<Weather | null>(null);

  useEffect(() => {
    if (selectedTrip) {
      (async () => {
        const weather = await getCurrentWeather(
          `${selectedTrip.lat},${selectedTrip.lon}`
        );
        setCurrentWeather(weather);
      })();
    } else {
      setCurrentWeather(null);
    }
  }, [selectedTrip]);

  return (
    <section className="today">
      <h3>{getDayName(currentWeather?.days[0].datetime)}</h3>
      {currentWeather ? (
        <>
          <div className="weather">
            <img
              src={`./weatherIcons/${currentWeather.days[0].icon}.svg`}
              alt="weather"
            />
            <h1>{Math.floor(currentWeather.days[0].temp)}</h1>
            <p>°C</p>
          </div>
          <h4 className="city">{selectedTrip?.name}</h4>
        </>
      ) : (
        <p>select or create your trip</p>
      )}
    </section>
  );
};

export default TodayForecast;
