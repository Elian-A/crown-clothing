import { Input, FormInputLabel, Group } from "./FormInput.styles.js";
const FormInput = ({ label, handler, name, value, type }) => {
  return (
    <Group>
      <Input
        className="form-input"
        required
        type={type}
        name={name}
        value={value}
        onChange={handler}
      />
      {label && (
        <FormInputLabel shrink={value.length} htmlFor={name}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
