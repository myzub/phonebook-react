import React from "react";
import classes from "./Form.module.css";
import Field from "../Field/Field";
import Button from "../Button/Button";

const Form = (props) => {
  return (
    <form className={classes.Form}>
      <Field placeholder={"Search"} />
      <div className="fill-wrapper">
        <Field placeholder={"Name"} />
        <Field placeholder={"Phone"} />
        <Field placeholder={"Email"} />
      </div>
      <Button name={"Confirm"} />
    </form>
  );
};

export default Form;
