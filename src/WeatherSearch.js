import React, { useState } from "react";
import axios from "axios";
import CurrentCity from "./CurrentCity";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);

    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayWeather);
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="search-form" id="search-form">
      <input type="submit" value="🔍" className="submit" id="submit" />
      <input
        type="search"
        placeholder="Enter city name..."
        onChange={searchCity}
        id="search"
        className="search"
      />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <CurrentCity />
        <div className="current-weather-details">
          <div className="current-temperature">
            <img src={weather.icon} alt={weather.description} id="icon" />
            <div className="temp">{weather.temperature}</div>
            <div className="unit">°C</div>
          </div>
          <div>
            <p className="current-details">
              <span class="material-symbols-outlined">thermostat</span>
              <span id="description"> {weather.description}</span> <br></br>
              <span class="material-symbols-outlined">humidity_low</span>
              Humidity: <strong id="humidity">{weather.humidity}%</strong>
              <br></br>
              <span class="material-symbols-outlined">air</span>
              Wind: <strong id="wind">{weather.wind}km/h</strong>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
