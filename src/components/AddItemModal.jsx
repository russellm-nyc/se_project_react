import ModalWithForm from "../components/ModalWithForm";

function AddItemModal({ activeModal, onClose }) {
  return (
    <ModalWithForm
      isOpen={activeModal === "add-garment-modal"}
      title={"New garment"}
      buttonText={"Add garment"}
      onClose={onClose}
      name="add-garment-form"
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="garmet-name-input" className="modal__label">
          Name
        </label>
        <input
          id="garmet-name-input"
          type="text"
          className="modal__input"
          placeholder="Name"
          minLength="2"
          maxLength="40"
          required
        />
        <label htmlFor="garmet-image-input" className="modal__label">
          Image
        </label>
        <input
          id="garmet-image-input"
          type="url"
          className="modal__input"
          placeholder="Image URL"
          required
        />
      </fieldset>

      <fieldset className="modal__fieldset">
        <legend className="modal__title">Select the weather type:</legend>
        <div>
          <input
            className="modal__radio-btn"
            type="radio"
            id="weather-hot"
            name="weather"
            value="hot"
          />
          <label htmlFor="weather-hot" className="modal__label">
            Hot
          </label>
        </div>
        <div>
          <input
            className="modal__radio-btn"
            type="radio"
            id="weather-warm"
            name="weather"
            value="warm"
          />
          <label htmlFor="weather-warm" className="modal__label">
            Warm
          </label>
        </div>
        <div>
          <input
            className="modal__radio-btn"
            type="radio"
            id="weather-cold"
            name="weather"
            value="cold"
          />
          <label htmlFor="weather-cold" className="modal__label">
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}
export default AddItemModal;
