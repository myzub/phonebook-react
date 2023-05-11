import React, { Component } from "react";
import classes from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <div className={classes.Button}>
        <h1>Button</h1>
      </div>
    );
  }
}

export default Button;
