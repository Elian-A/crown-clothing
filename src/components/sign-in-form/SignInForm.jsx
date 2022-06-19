import { useState } from "react";
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";

import "./SignInForm.scss";

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
    <div className="sign-in-container">
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
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={handleSignIn}>
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
