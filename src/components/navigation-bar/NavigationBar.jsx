import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

import {
  LogoContainer,
  NavLink,
  NavLinksContainer,
  Navigation,
} from "./NavigationBar.styles.js";
import { userSignOut } from "../../utils/firebase";
import { getCurrentUser } from "../../store/user/userSelectors";

const NavigationBar = () => {
  const user = useSelector(getCurrentUser);

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
