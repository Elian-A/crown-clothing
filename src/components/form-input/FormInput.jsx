import React from "react";

const FormInput = ({ label, handler, name, value, type }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={handler}
      />
    </div>
  );
};

export default FormInput;
