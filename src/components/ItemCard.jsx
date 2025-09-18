import "../blocks/ItemCard.css";

function ItemCard({ data, onCardClick }) {
  function handleOpenCard() {
    onCardClick(data);
  }

  return (
    <div className="card">
      <h2 className="card__title">{data.name}</h2>
      <img
        src={data.imageUrl}
        alt={data.name}
        className="card__img"
        onClick={handleOpenCard}
      />
    </div>
  );
}

export default ItemCard;
