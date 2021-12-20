import { getAuth, onAuthStateChanged } from "firebase/auth";
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
  const AuthContext = createContext(loggedInState);

  const loggedIn = useContext(AuthContext);

  /**
   * AuthContext is for the Provider
   * loggedIn is the value in context
   */
  return { AuthContext, loggedIn };
};

export default useAuthContext;
