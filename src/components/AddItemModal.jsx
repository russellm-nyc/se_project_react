import ModalWithForm from "../components/ModalWithForm";
import { useForm } from "../hooks/useForm";

function AddItemModal({ activeModal, onAddItem, onClose }) {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    weather: "hot",
    link: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem(values, resetForm);
  };

  return (
    <ModalWithForm
      isOpen={activeModal === "add-garment-modal"}
      title="New garment"
      buttonText="Add garment"
      name="add-garment-form"
      handleSubmit={handleSubmit}
      onClose={onClose}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="garment-name-input" className="modal__label">
          Name
        </label>
        <input
          id="garment-name-input"
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
        <label htmlFor="garment-link-input" className="modal__label">
          Image
        </label>
        <input
          id="garment-link-input"
          type="url"
          className="modal__input"
          name="link"
          placeholder="Image URL"
          value={values.link}
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
