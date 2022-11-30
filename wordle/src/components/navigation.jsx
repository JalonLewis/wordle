import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Fragment } from "react";

function Navigation() {
  let h1Text = "Wordle+";
  if (useLocation().pathname.includes("wordle")) {
    h1Text = "Wordle";
  } else if (useLocation().pathname.includes("qourdle")) {
    h1Text = "Qourdle";
  } else if (useLocation().pathname.includes("octordle")) {
    h1Text = "Octordle";
  }
  return (
    <>
      <NavLink to="/">
        {" "}
        <h1 className={`text-center text-light`}>{h1Text}</h1>
      </NavLink>{" "}
      <Outlet />
    </>
  );
}

export default Navigation;
