import styled from "styled-components";
import Avatar from "./Avatar";
import SignOut from "./SignOut";

/** component */
const NavBar = () => {
  return (
    <WrapperDiv>
      <SignOut />
      <Avatar />
    </WrapperDiv>
  );
};

export default NavBar;

/** style */
export const WrapperDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: ${({ theme }) => theme.background2};
  display: flex;
  align-items: center;
  justify-content: end;
`;
