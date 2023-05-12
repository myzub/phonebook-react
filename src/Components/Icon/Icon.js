import React, { Component } from "react";
import classes from "./Icon.module.css";

class Icon extends Component {
  render() {
    return (
      <div className={classes.Icon}>
        <img src="../../../img/edit.png" alt="edit"/>
      </div>
    );
  }
}

export default Icon;
