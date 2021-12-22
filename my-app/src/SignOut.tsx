import { getAuth, signOut } from "firebase/auth";
import useAuthContext from "./useAuthContext";

const SignOut = () => {
  const { loggedIn } = useAuthContext();

  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth);
  };

  if (loggedIn) {
    return <button onClick={handleSignOut}>sign out</button>;
  } else {
    return <></>;
  }
};

export default SignOut;
