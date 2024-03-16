import WeatherSearch from "./WeatherSearch";
import "./WeatherSearch.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <WeatherSearch />
      </header>
      <div class="line"></div>
      <footer>
        <p>
          This project was coded by
          <a href="https://github.com/shizop"> Syaibatul</a>, is
          <a href="https://github.com/shizop/weather-app">
            open-sourced on GitHub
          </a>{" "}
          and
          <a href="https://transcendent-weather.netlify.app">
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
