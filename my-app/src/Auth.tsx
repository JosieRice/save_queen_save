import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(true);

  const auth = getAuth();

  const handleSignUp = () => {
    console.log("click function");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log({ user });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log({ errorCode });
        const errorMessage = error.message;
        console.log({ errorMessage });
        // ..
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log({ user });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log({ errorCode });
        const errorMessage = error.message;
        console.log({ errorMessage });
      });
  };

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
};

export default Auth;
