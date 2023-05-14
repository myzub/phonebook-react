import React from "react";
import classes from "./Field.module.css";

const Field = (props) => {
  return (
    <input
      className={classes.Field}
      placeholder={props.placeholder}
      name={props.name}
    />
  );
};

export default Field;
