import React from "react";
import classes from "./Form.module.css";
import Field from "../Field/Field";
import Button from "../Button/Button";

const Form = (props) => {
  return (
    <form className={classes.Form} onSubmit={props.onSubmit}>
      <Field placeholder={"Search"} />
      <div className="field-wrapper">
        <Field placeholder={"Name"} name={"name"} />
        <Field placeholder={"Phone"} name={"phone"} />
        <Field placeholder={"Email"} name={"email"} />
      </div>
      <Button name={"Submit"} />
    </form>
  );
};

export default Form;
