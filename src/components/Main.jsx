import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/Main.css";

function Main({ clothingItems, onCardClick, weatherData }) {
  const contextValue = useContext(CurrentTemperatureUnitContext);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {weatherData.temp[contextValue.currentTempUnit]}&deg;{" "}
        {contextValue.currentTempUnit} / You may want to wear:
      </p>
      <ul className="main__list">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} data={item} onClick={onCardClick} />
        ))}
      </ul>
    </main>
  );
}

export default Main;
