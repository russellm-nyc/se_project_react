import cloudy from "../assets/cloudy.svg";
import "../blocks/WeatherCard.css";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <img src={cloudy} alt="Cloudy weather" className="weather-card__img" />
      <p className="weather-card__temp">{weatherData.temp}&deg;F</p>
    </section>
  );
}

export default WeatherCard;
