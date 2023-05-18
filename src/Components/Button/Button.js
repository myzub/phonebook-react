import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  // TODO transfer button type either
  return (
    <button className={classes.Button} type={"submit"}>
      {props.name}
    </button>
  );
};

export default Button;
