import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { activeTripAtom, upcomingTripAtom } from "../../Store";
import { getForecast } from "../../services/Services";
import { Weather } from "../../types/common";
import { getDayName } from "../../utilities/utility";
import "./Forecast.css";

const Forecast = () => {
  const activeTrip = useAtomValue(activeTripAtom);
  const upcomingTrip = useAtomValue(upcomingTripAtom);
  const [forecast, setForecast] = useState<Weather | null>(null);

  const trip = activeTrip || upcomingTrip;

  useEffect(() => {
    if (trip) {
      const location = `${trip.lat},${trip.lon}`;
      const period = `${trip.startDate}/${trip.endDate}`;
      (async () => {
        const weather = await getForecast(location, period);
        setForecast(weather);
      })();
    } else {
      setForecast(null);
    }
  }, [trip]);

  return (
    <div className="forecast">
      <h4 className="title">By days</h4>
      <div className="list">
        {forecast ? (
          forecast.days.map((day) => {
            return (
              <div key={day.datetime} className="day">
                <p>{getDayName(day.datetime)}</p>
                <img src={`./weatherIcons/${day.icon}.svg`} alt="weather" />
                <p>{`${Math.floor(day.tempmin)}°/${Math.floor(
                  day.tempmax
                )}°`}</p>
              </div>
            );
          })
        ) : (
          <p>select or create your trip</p>
        )}
      </div>
    </div>
  );
};

export default Forecast;
