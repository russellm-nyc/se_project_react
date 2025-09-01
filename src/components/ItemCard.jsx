import "../blocks/ItemCard.css";

function ItemCard({ data }) {
  return (
    <div className="item-card">
      <p className="item-card__title">{data.name}</p>
      <img src={data.link} alt="" className="item-card__img" />
    </div>
  );
}

export default ItemCard;
