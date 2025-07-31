import "./App.css";

import { FaCloud } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import WeatherCard from "./Components/weather";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const API_KEY = "c67c15e7ca981d484ed018a72d3b7cfc";

  const fetchWeather = async () => {
    if (!city) {
      setError ("Please enter your city name!");
      setWeather(null);
      return;
    }
    setError("");
    setWeather(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found. Please try again.");
      } else {
        setError("An error occurred while fetching data");
        console.log("error fetching weather data", err);
      }
    }
  };

  // Helper for weather icon moved to WeatherCard

  return (
    <div className="app-bg" >
      <div className="weather-card">
        <div className="weather-header">
          <FaCloud size={48} color="#4e8cff" className="weather-header-icon" />
          <span className="weather-title">Weather App</span>
        </div>
        <div className="weather-search">
          <input
            className="weather-input"
            type="text"
            placeholder="Enter your city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") fetchWeather();
            }
        }
          />
          <button className="weather-btn" onClick={fetchWeather}>
            Search
          </button>
        </div>
        {error && <div className="weather-error">{error}</div>}
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
};

export default App;
