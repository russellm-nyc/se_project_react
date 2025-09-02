import "../blocks/ItemModal.css";

function ModalWithForm({ isOpen }) {
  return (
    <div className={`modal${isOpen ? " modal_is-opened" : ""}`}>
      ModalWithForm
    </div>
  );
}

export default ModalWithForm;
