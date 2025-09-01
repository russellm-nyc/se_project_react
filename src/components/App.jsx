import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { defaultClothingItems } from "../utils/defaultClothingItems";
import "../blocks/App.css";
function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  return (
    <div className="app">
      {" "}
      <Header />
      <Main clothingItems={clothingItems} />
      <Footer />{" "}
    </div>
  );
}
export default App;
