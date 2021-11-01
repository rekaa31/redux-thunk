import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "./Home";
import Data from "./Data";

import classes from "./styles.module.css";

export default function AppRouter() {
  return (
    <Router>
      <div className={classes.appRouter}>
        <Navbar />

        <div className={classes.routeContent}>
          <Route path="/" exact component={Home} />
          <Route path="/data" component={Data} />
        </div>
      </div>
    </Router>
  );
}
