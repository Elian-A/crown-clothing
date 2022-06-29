import { Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import Cart from "../cart/Cart";

import { useContext } from "react";

import {
  LogoContainer,
  NavLink,
  NavLinksContainer,
  Navigation,
} from "./NavigationBar.styles.js";
import { UserContext } from "../../context/User";
import { userSignOut } from "../../utils/firebase";

const NavigationBar = () => {
  const { user } = useContext(UserContext);

  const handleSignOut = () => userSignOut();

  return (
    <Navigation>
      <LogoContainer to="/">
        <CrownLogo />
      </LogoContainer>
      <NavLinksContainer>
        <NavLink to="/shop">Shop</NavLink>
        {user ? (
          <span onClick={handleSignOut}>Sign Out</span>
        ) : (
          <NavLink to="/sign-in">Sign In</NavLink>
        )}
        <Cart />
      </NavLinksContainer>
    </Navigation>
  );
};

export default NavigationBar;
