import { signInWithGooglePopup } from "../../utils/firebase";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";

const SignIn = () => {
  const handleSignIn = async () => {
    try {
      await signInWithGooglePopup();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div>
        <h2>Already have an account</h2>
        <SignInForm />
        <button onClick={handleSignIn}>Sign in with google</button>
      </div>
      <div>
        <h2>Don't have an accout?</h2>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignIn;
