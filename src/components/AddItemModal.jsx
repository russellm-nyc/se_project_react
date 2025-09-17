import ModalWithForm from "../components/ModalWithForm";
import { useForm } from "../hooks/useForm";

function AddItemModal({ activeModal, onClose }) {
  const { values, handleChange } = useForm({
    name: "",
    weather: "hot",
  });

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
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
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
          name="image"
          placeholder="Image URL"
          value={values.image || ""}
          onChange={handleChange}
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
            onChange={handleChange}
            checked={values.weather === "hot"}
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
            onChange={handleChange}
            checked={values.weather === "warm"}
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
            onChange={handleChange}
            checked={values.weather === "cold"}
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
