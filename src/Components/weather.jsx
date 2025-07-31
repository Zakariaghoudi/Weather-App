import { FaMapMarkerAlt, FaTemperatureHigh, FaRegClock } from "react-icons/fa";
import "./weather.css";
const getWeatherIcon = (main) => {
  switch (main) {
    case "Clear":
      return "☀️";
    case "Clouds":
      return "☁️";
    case "Rain":
      return "🌧️";
    case "Thunderstorm":
      return "⛈️";
    case "Drizzle":
      return "🌦️";
    case "Snow":
      return "❄️";
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return "🌫️";
    default:
      return "🌡️";
  }
};

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return (
      <div className="weather-welcome">
        <div className="weather-welcome-icon">🌤️</div>
        <div className="weather-welcome-title">Welcome!</div>
        <div className="weather-welcome-desc">
          Enter a city to get the latest weather update.
        </div>
      </div>
    );
  }
  return (
    <div className="weather-main">
      <div className="weather-icon">
        {getWeatherIcon(weather.weather[0].main)}
      </div>
      <div className="weather-location">
        <FaMapMarkerAlt className="weather-location-icon" />
        {weather.name}
      </div>
      <div className="weather-desc">{weather.weather[0].description}</div>
      <div className="weather-temp">
        <FaTemperatureHigh />
        {Math.round(weather.main.temp)}°C
      </div>
      <div className="weather-details">
        <div className="weather-detail">
          Feels like: <b>{Math.round(weather.main.feels_like)}°C</b>
        </div>
        <div className="weather-detail">
          Humidity: <b>{weather.main.humidity}%</b>
        </div>
      </div>
      <div className="weather-wind">
        Wind: <b>{Math.round(weather.wind.speed)} m/s</b>
      </div>
      <div className="weather-time">
        <FaRegClock />
        {new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  );
};

export default WeatherCard;
