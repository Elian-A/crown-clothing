import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/">logo</Link>
        <div>
          <Link to="/shop">Shop</Link>
          <Link to="/sign-in">Sign In</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
