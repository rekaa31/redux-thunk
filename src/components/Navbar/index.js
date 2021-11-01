import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./styles.module.css";

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <NavLink exact to="/" activeClassName={classes.active}>
        Home
      </NavLink>
      <NavLink to="/data" activeClassName={classes.active}>
        Data
      </NavLink>
    </nav>
  );
}
