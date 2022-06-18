import "./FormInput.scss";
const FormInput = ({ label, handler, name, value, type }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        required
        type={type}
        name={name}
        value={value}
        onChange={handler}
      />
      {label && (
        <label
          className={`form-input-label ${value.length ? "shrink" : ""}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
