import React from "react";
import classes from "./Field.module.css";

const Field = ({ inputClass, placeholder, name, onChange }) => {
  // TODO
  /*
    add label and label check
    add display error
  
    add validation func, returns necessary input data type
    validate = (value) => {
      [v1(v), v2(v), v3(v)]
    }
    or map on
    validate{[v1,v2,v3]}


  */
  return (
    <input
      className={`${classes.Field} ${inputClass}`}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
};

export default Field;
