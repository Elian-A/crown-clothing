import { Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import Cart from "../cart/Cart";

import { useContext } from "react";

import "./NavigationBar.scss";
import { UserContext } from "../../context/User";

const NavigationBar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navigation">
      <Link to="/" className="logo-container">
        <CrownLogo />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        {user ? (
          <Link className="nav-link" to="/sign-in">
            Sign Out
          </Link>
        ) : (
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        )}
        <Cart />
      </div>
    </nav>
  );
};

export default NavigationBar;
