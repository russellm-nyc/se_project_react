import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/Main.css";

function Main({ clothingItems, onCardClick }) {
  return (
    <main className="main">
      <WeatherCard />
      <p className="main__text">Today is 75&deg; F / You may want to wear:</p>
      <ul className="main__list">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} data={item} onClick={onCardClick} />
        ))}
      </ul>
    </main>
  );
}

export default Main;
