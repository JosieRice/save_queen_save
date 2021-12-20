import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import useAuthContext from "./useAuthContext";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(true);

  const { loggedIn } = useAuthContext();

  const auth = getAuth();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((error) => {});
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((error) => {});
  };

  if (loggedIn) {
    return <div>logged In!!!</div>;
  } else {
    return (
      <>
        <button onClick={() => setSignUp(!signUp)}>
          {signUp ? "switch to sign in" : "switch to sign up"}
        </button>
        <p>{signUp ? "Sign Up" : "Sign In"}</p>
        <input
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="Enter your email"
          type="email"
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.currentTarget.value)}
          placeholder="Enter your password"
          type="password"
          value={password}
        />
        <button onClick={signUp ? handleSignUp : handleSignIn}>Sign Up</button>
      </>
    );
  }
};

export default Auth;
