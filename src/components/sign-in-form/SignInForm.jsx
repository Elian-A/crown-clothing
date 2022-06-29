import { useState } from "react";
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase";
import Button, { BUTTON_TYPE } from "../button/Button";
import FormInput from "../form-input/FormInput";

import { ButtonsContainer, SignInContainer } from "./SignInForm.styles.js";

const defaultFormItems = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formItems, setFormItems] = useState(defaultFormItems);
  const { email, password } = formItems;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormItems({ ...formItems, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await signInUserWithEmailAndPassword(email, password);
  };

  const handleSignIn = async () => {
    try {
      await signInWithGooglePopup();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password </span>
      <form onSubmit={handleSubmit}>
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
        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE.google}
            onClick={handleSignIn}
          >
            Sign in with google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
