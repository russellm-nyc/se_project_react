import "../blocks/ItemModal.css";

function ModalWithForm({
  isOpen,
  onClose,
  children,
  handleSumit,
  title,
  buttonText,
  name,
}) {
  return (
    <div className={`modal${isOpen ? " modal_is-opened" : ""}`}>
      <div className="modal__container modal__container_type_form">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close-btn modal__close-btn_type_form"
          onClick={onClose}
        >
          X
        </button>
        <form onSubmit={handleSumit} name={name} className="modal__form">
          {children}
        </form>
        <button type="submit" className="modal__submit-btn">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
