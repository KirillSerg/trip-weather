import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { activeTripAtom, upcomingTripAtom } from "../../Store";
import CountDown from "../countDown/CountDown";
import { getCurrentWeather } from "../../services/Services";
import { getDayName } from "../../utilities/utility";
import { Weather } from "../../types/common";
import "./TodayForecast.css";

const TodayForecast = () => {
  const activeTrip = useAtomValue(activeTripAtom);
  const upcomingTrip = useAtomValue(upcomingTripAtom);
  const [currentWeather, setCurrentWeather] = useState<Weather | null>(null);

  const trip = activeTrip || upcomingTrip;

  useEffect(() => {
    if (trip) {
      (async () => {
        const weather = await getCurrentWeather(`${trip.lat},${trip.lon}`);
        setCurrentWeather(weather);
      })();
    } else {
      setCurrentWeather(null);
    }
  }, [trip]);

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
          <h4 className="city">{trip?.name}</h4>
        </>
      ) : (
        <p>select or create your trip</p>
      )}
      <CountDown />
    </section>
  );
};

export default TodayForecast;
