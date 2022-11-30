import { Outlet, NavLink } from "react-router-dom";
import { Fragment } from "react";

function Navigation() {
  return (
    <>
    <NavLink to="/"> <h1 className={`text-center text-light`}>Wordle+</h1></NavLink>
      <Outlet />
    </>
  );
}

export default Navigation;
