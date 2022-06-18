import { useState } from "react";
import { signInUserWithEmailAndPassword } from "../../utils/firebase";
import FormInput from "../form-input/FormInput";

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

  return (
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
      <button>Sign in</button>
    </form>
  );
};

export default SignInForm;
