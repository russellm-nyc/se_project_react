import "../blocks/ItemModal.css";

function ModalWithForm({
  isOpen,
  onClose,
  children,
  handleSubmit,
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
          className="modal__close"
          onClick={onClose}
        ></button>
        <form onSubmit={handleSubmit} name={name} className="modal__form">
          {children}

          <button type="submit" className="modal__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
