import { useState } from "react";
import {
  addUserDoc,
  createUserAuthWithEmailAndPassword,
} from "../../utils/firebase";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import { SignUpContainer } from "./SignUpForm.styles.js";

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

    // after user is created the access is immediately
    try {
      const { user } = await createUserAuthWithEmailAndPassword(
        email,
        password
      );
      await addUserDoc(user, { displayName });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
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
        <Button>Create User</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
