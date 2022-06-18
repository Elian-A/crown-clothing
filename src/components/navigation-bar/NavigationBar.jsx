import { Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import Cart from "../cart/Cart";

import "./NavigationBar.scss";

const NavigationBar = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="logo-container">
        <CrownLogo />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        <Link className="nav-link" to="/sign-in">
          Sign In
        </Link>
        <Cart />
      </div>
    </nav>
  );
};

export default NavigationBar;
