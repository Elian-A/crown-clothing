import { useState } from "react";
import { createUserAuthWithEmailAndPassword } from "../../utils/firebase";

import FormInput from "../form-input/FormInput";

const defaultFormItems = {
  displayName: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const SignUpForm = () => {
  const [formItems, setFormItems] = useState(defaultFormItems);
  const { displayName, email, password, repeatPassword } = formItems;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormItems({ ...formItems, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== repeatPassword) {
      window.alert("Passwords dont match");
      return;
    }

    await createUserAuthWithEmailAndPassword(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Display Name"
        type="text"
        name="displayName"
        value={displayName}
        handler={handleInputChange}
      />
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={email}
        handler={handleInputChange}
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={password}
        handler={handleInputChange}
      />
      <FormInput
        label="Repeat Password"
        type="password"
        name="repeatPassword"
        value={repeatPassword}
        handler={handleInputChange}
      />
      <button>Create User</button>
    </form>
  );
};

export default SignUpForm;
