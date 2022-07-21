import { Link } from "react-router-dom";
import { DivLogin, DivLogo, DivNavBar, LoginBtn } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <>
      <DivNavBar>
        <Link style={{ textDecoration: "none" }} to="/">
          <DivLogo>LocalArtIsT</DivLogo>
        </Link>

        <DivLogin>
          <Link style={{ textDecoration: "none" }} to="/login"><LoginBtn>LogIn</LoginBtn></Link>
        </DivLogin>
      </DivNavBar>
    </>
  );
};
