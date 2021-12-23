import { getAuth, signOut } from "firebase/auth";
import styled from "styled-components";
import useAuthContext from "../useAuthContext";

const SignOut = () => {
  const { loggedIn } = useAuthContext();

  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth);
  };

  if (loggedIn) {
    return <Button onClick={handleSignOut}>Sign Out</Button>;
  } else {
    return <></>;
  }
};

export default SignOut;

const Button = styled.button`
  background-color: ${({ theme }) => theme.background1};
  color: ${({ theme }) => theme.text};
  height: 30px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
`;
