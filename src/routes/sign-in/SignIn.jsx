import { signInWithGooglePopup } from "../../utils/firebase";

import { UserContext } from "../../context/User";
import { useContext } from "react";

const SignIn = () => {
  const handleSignIn = async () => {
    try {
      await signInWithGooglePopup();
    } catch (err) {
      console.error(err);
    }
  };
  return <button onClick={handleSignIn}>Sign in with google</button>;
};

export default SignIn;
