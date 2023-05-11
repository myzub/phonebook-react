import React, { Component } from "react";
import classes from "./Loader.module.css";

class Loader extends Component {
  render() {
    return (
      <div className={classes.Loader}>
        <h1>Loader</h1>
      </div>
    );
  }
}

export default Loader;
