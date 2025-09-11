import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { weatherConditionImages } from "../utils/constants";
import cloudy from "../assets/cloudy.svg";
import "../blocks/WeatherCard.css";

function WeatherCard({ weatherData }) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather-card">
      <img
        src={
          weatherConditionImages[weatherData.isDay ? "day" : "night"][
            weatherData.weatherCondition
          ]?.image || weatherConditionImages["day"]["default"].image
        }
        alt="Cloudy weather"
        className="weather-card__img"
      />
      <p className="weather-card__temp">
        {weatherData.temp[currentTempUnit]}&deg; {currentTempUnit}
      </p>
    </section>
  );
}

export default WeatherCard;
