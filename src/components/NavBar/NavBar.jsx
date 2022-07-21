import { Link } from "react-router-dom";
import {
  DivLogin,
  DivLogo,
  DivNavBar,
  DivSearcher,
  LoginBtn,
} from "./NavBar.styled";

export const NavBar = () => {
  return (
    <>
      <DivNavBar>
        <Link style={{ textDecoration: "none" }} to="/">
          <DivLogo>LocalArtIsT</DivLogo>
        </Link>

        <DivLogin>
          <LoginBtn>Log In</LoginBtn>
        </DivLogin>
      </DivNavBar>
    </>
  );
};
