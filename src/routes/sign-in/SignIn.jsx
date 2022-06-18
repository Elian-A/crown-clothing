import { signInWithGooglePopup } from "../../utils/firebase";

const SignIn = () => {
  const handleSignIn = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };
  return <button onClick={handleSignIn}>Sign in with google</button>;
};

export default SignIn;
