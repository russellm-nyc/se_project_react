import { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ItemModal from "../components/ItemModal";
import ModalWithForm from "../components/ModalWithForm";
import { defaultClothingItems } from "../utils/defaultClothingItems";
import "../blocks/App.css";
import { getWeatherData } from "../utils/weatherApi";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({ name: "", temp: "0" });
  const [currentTempUnit, setCurrentTempUnit] = useState("F");

  function handleOpenItemModal(card) {
    setActiveModal("item-modal");
    setSelectedCard(card);
  }

  function handleOpenAddGarmentModal() {
    setActiveModal("add-garment-modal");
  }

  function handleTempUnitChange() {
    setCurrentTempUnit(currentTempUnit === "F" ? "C" : "F");
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

  useEffect(() => {
    setClothingItems(defaultClothingItems);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTempUnit, handleTempUnitChange }}
    >
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
          title={"New garment"}
          buttonText={"Add garment"}
          onClose={handleCloseModal}
          name="add-garment-form"
        >
          <fieldset className="modal__fieldset">
            <label htmlFor="garmet-name-input" className="modal__label">
              Name
            </label>
            <input
              id="garmet-name-input"
              type="text"
              className="modal__input"
              placeholder="Name"
              minLength="2"
              maxLength="40"
              required
            />
            <label htmlFor="garmet-image-input" className="modal__label">
              Image
            </label>
            <input
              id="garmet-image-input"
              type="url"
              className="modal__input"
              placeholder="Image URL"
              required
            />
          </fieldset>

          <fieldset className="modal__fieldset">
            <legend className="modal__title">Select the weather type:</legend>
            <div>
              <input
                className="modal__radio-btn"
                type="radio"
                id="weather-hot"
                name="weather"
                value="hot"
              />
              <label htmlFor="weather-hot" className="modal__label">
                Hot
              </label>
            </div>
            <div>
              <input
                className="modal__radio-btn"
                type="radio"
                id="weather-warm"
                name="weather"
                value="warm"
              />
              <label htmlFor="weather-warm" className="modal__label">
                Warm
              </label>
            </div>
            <div>
              <input
                className="modal__radio-btn"
                type="radio"
                id="weather-cold"
                name="weather"
                value="cold"
              />
              <label htmlFor="weather-cold" className="modal__label">
                Cold
              </label>
            </div>
          </fieldset>
        </ModalWithForm>
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}
export default App;
