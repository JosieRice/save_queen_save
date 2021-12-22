import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useContext, useState } from "react";

const useAuthContext = () => {
  /** logged in state of null is for before auth status has been checked */
  const [loggedInState, setLoggedInState] = useState<boolean | null>(null);

  const auth = getAuth();

  /** watches for changes in auth state and updates context as needed */
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setLoggedInState(true);
    } else {
      setLoggedInState(false);
    }
  });

  /** after authenticating on the redirect page, this gets the results of said signIn/signUp */
  getRedirectResult(auth)
    .then((result) => {
      console.log({ result });

      if (result) {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        console.log({ token });

        // The signed-in user info.
        const user = result.user;
        console.log({ user });
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log({ errorCode });
      const errorMessage = error.message;
      console.log({ errorMessage });
      // The email of the user's account used.
      const email = error.email;
      console.log({ email });
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log({ credential });
      // ...
    });
  const AuthContext = createContext(loggedInState);

  const loggedIn = useContext(AuthContext);

  /**
   * AuthContext is for the Provider
   * loggedIn is the value in context
   */
  return { AuthContext, loggedIn };
};

export default useAuthContext;
