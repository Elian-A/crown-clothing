import { Outlet } from "react-router-dom";

import NavigationBar from "../../components/navigation-bar/NavigationBar";

const Navigation = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default Navigation;
