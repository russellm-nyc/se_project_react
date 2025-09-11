import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/Main.css";
import "../blocks/Page.css";
import { getWeatherCondition } from "../utils/weatherApi";

function Main({ clothingItems, onCardClick, weatherData }) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);
  const currentTemp = weatherData.temp?.[currentTempUnit];
  const weatherCondition = getWeatherCondition(weatherData.temp.F);

  const filteredItems = clothingItems.filter(
    (item) => item.weather === weatherCondition
  );

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {currentTemp}&deg; {currentTempUnit} / You may want to wear:
      </p>
      <ul className="main__list">
        {filteredItems.map((item) => (
          <ItemCard key={item._id} data={item} onClick={onCardClick} />
        ))}
      </ul>
    </main>
  );
}

export default Main;
