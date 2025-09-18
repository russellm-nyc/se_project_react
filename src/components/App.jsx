import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "../blocks/App.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import ItemModal from "../components/ItemModal";
import AddItemModal from "../components/AddItemModal";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { defaultClothingItems } from "../utils/defaultClothingItems";
import { getWeatherData } from "../utils/weatherApi";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({ name: "", temp: 0 });
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

  function handleAddItemSubmit(inputValues, resetForm) {
    const newItem = {
      ...inputValues,
      _id: Date.now(),
    };
    setClothingItems([newItem, ...clothingItems]);
    resetForm();
    handleCloseModal();
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
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTempUnit, handleTempUnitChange }}
    >
      <div className="app">
        <Header
          weatherData={weatherData}
          handleOpenAddGarmentModal={handleOpenAddGarmentModal}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                weatherData={weatherData}
                clothingItems={clothingItems}
                onCardClick={handleOpenItemModal}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                clothingItems={clothingItems}
                onCardClick={handleOpenItemModal}
                onAddItemClick={handleOpenAddGarmentModal}
              />
            }
          />
        </Routes>

        <Footer />
        <ItemModal
          card={selectedCard}
          isOpen={activeModal === "item-modal"}
          onClose={handleCloseModal}
        />
        <AddItemModal
          activeModal={activeModal}
          onAddItem={handleAddItemSubmit}
          onClose={handleCloseModal}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
