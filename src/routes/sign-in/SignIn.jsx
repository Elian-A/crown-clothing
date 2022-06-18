import { signInWithGooglePopup } from "../../utils/firebase";

import { UserContext } from "../../context/User";
import { useContext } from "react";

const SignIn = () => {
  const { setUser, user } = useContext(UserContext);

  const handleSignIn = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      setUser(user);
    } catch (err) {
      console.error(err);
    }
  };
  return <button onClick={handleSignIn}>Sign in with google</button>;
};

export default SignIn;
