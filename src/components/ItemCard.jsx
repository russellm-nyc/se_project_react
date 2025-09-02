import "../blocks/ItemCard.css";

function ItemCard({ data, onClick }) {
  function handleOpenCard() {
    onClick(data);
  }

  return (
    <div className="card">
      <h2 className="card__title">{data.name}</h2>
      <img
        src={data.link}
        alt={data.name}
        className="card__img"
        onClick={handleOpenCard}
      />
    </div>
  );
}

export default ItemCard;
