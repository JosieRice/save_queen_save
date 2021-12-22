import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import useAuthContext from "./useAuthContext";

const SignIn = () => {
  const { loggedIn } = useAuthContext();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleSignIn = () => {
    signInWithRedirect(auth, provider);
  };

  if (loggedIn === false) {
    return (
      <section style={{ textAlign: "center" }}>
        <p>Sign in to get started.</p>
        <button onClick={handleSignIn}>Sign In With Google</button>
      </section>
    );
  } else {
    return <></>;
  }
};

export default SignIn;
