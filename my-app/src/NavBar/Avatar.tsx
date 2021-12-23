import styled from "styled-components";
import useAuthContext from "../useAuthContext";

/** component */
const Avatar = () => {
  const { loggedIn, user } = useAuthContext();

  if (loggedIn) return <Img src={user?.photoURL || ""} />;
  else return <></>;
};

export default Avatar;

/** style */
const Img = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50px;
  margin: 10px;
`;
