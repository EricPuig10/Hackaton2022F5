import { Link } from "react-router-dom";
import { DivLogin, DivLogo, DivNavBar } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <>
      <DivNavBar>
        <Link style={{ textDecoration: "none" }} to="/">
          <DivLogo>LocalArtIsT</DivLogo>
        </Link>
        <DivLogin>
          <Link to= '/login'>Log In</Link>
        </DivLogin>
      </DivNavBar>
    </>
  );
};
