import ItemCard from "./ItemCard";
import "../blocks/ClothesSection.css";

function ClothesSection({ clothingItems, onCardClick, onAddItemClick }) {
  return (
    <section className="clothes-section">
      <div className="clothes-section__row">
        <p className="clothes-section__title">Your items</p>
        <button className="clothes-section__btn" onClick={onAddItemClick}>
          + Add new
        </button>
      </div>
      <ul className="clothes-section__card-list">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} data={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </section>
  );
}

export default ClothesSection;
