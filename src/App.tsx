import "./App.css";
import Forecast from "./components/forecast/Forecast";
import Search from "./components/search/Search";
import TodayForecast from "./components/todayForecast/TodayForecast";
import TripsList from "./components/tripsList/TripsList";

const App = () => {
  return (
    <main className="conteiner">
      <section className="trips">
        <header>Trip-weather</header>
        <Search />
        <TripsList />
        <Forecast />
      </section>
      <TodayForecast />
    </main>
  );
};

export default App;
