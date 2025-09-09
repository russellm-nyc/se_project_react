import { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ItemModal from "../components/ItemModal";
import ModalWithForm from "../components/ModalWithForm";
import { defaultClothingItems } from "../utils/defaultClothingItems";
import "../blocks/App.css";
import { getWeatherData } from "../utils/weatherApi";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({ name: "", temp: "0" });

  function handleOpenItemModal(card) {
    setActiveModal("item-modal");
    setSelectedCard(card);
  }

  function handleOpenAddGarmentModal() {
    setActiveModal("add-garment-modal");
  }

  function handleCloseModal() {
    setActiveModal("");
  }

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <Header
        weatherData={weatherData}
        handleOpenAddGarmentModal={handleOpenAddGarmentModal}
      />
      <Main
        weatherData={weatherData}
        clothingItems={clothingItems}
        onCardClick={handleOpenItemModal}
      />
      <Footer />
      <ItemModal
        card={selectedCard}
        isOpen={activeModal === "item-modal"}
        onClose={handleCloseModal}
      />
      <ModalWithForm
        isOpen={activeModal === "add-garment-modal"}
        onClose={handleCloseModal}
      />
    </div>
  );
}
export default App;
