import Search from "./components/search/Search";
import TripsList from "./components/tripsList/TripsList";
import Forecast from "./components/forecast/Forecast";
import TodayForecast from "./components/todayForecast/TodayForecast";
import Modal from "./components/modal/Modal";
import "./App.css";

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
      <Modal />
    </main>
  );
};

export default App;
