import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/Main.css";

function Main({ clothingItems }) {
  return (
    <main className="main">
      <WeatherCard />
      <p className="main__text">Today is 75&deg; F / You may want to wear:</p>
      <p className="main__list">
        {clothingItems.map((item) => {
          return <ItemCard data={item} />;
        })}
      </p>
    </main>
  );
}

export default Main;
