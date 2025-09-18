import { useRef } from "react";
import useModalClose from "../hooks/useModalClose";
import "../blocks/ItemModal.css";

function ItemModal({ card, isOpen, onClose, onDeleteItem }) {
  const modalRef = useRef();

  useModalClose(isOpen, onClose, modalRef);
  return (
    <div className={`modal${isOpen ? " modal_is-opened" : ""}`}>
      <div className="modal__container" ref={modalRef}>
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div>
            <p className="modal__text">{card.name}</p>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button
            type="button"
            className="modal__delete_item-btn"
            onClick={() => onDeleteItem(card)}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
