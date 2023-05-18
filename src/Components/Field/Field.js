import React from "react";
import classes from "./Field.module.css";

const Field = (props) => {

/* TODO
  add label and label check
  add display error

  add validation функція, повертає необхідний тип даних/вводу
  validate = (value) => {
    [v1(v), v2(v), v3(v)]
  }
  or map on
  validate{[v1,v2,v3]}


*/

  return (
    <input
      className={classes.Field}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.searchHandler}
    />
  );
};

export default Field;
