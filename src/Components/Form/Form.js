import React from "react";
import classes from "./Form.module.css";
import Field from "../Field/Field";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { submitHandler, searchHandler } from "../../store/actions/phonebook";

const Form = () => {
  const dispatch = useDispatch();
  const submitHandlerDispatch = (event) => dispatch(submitHandler(event));
  const searchHandlerDispatch = (event) => dispatch(searchHandler(event));

  return (
    <form className={classes.Form} onSubmit={submitHandlerDispatch}>
      <Field
        placeholder={"Search"}
        name={"search"}
        onChange={searchHandlerDispatch}
      />
      <div className={classes.fieldWrapper}>
        <Field
          placeholder={"Name"}
          name={"name"}
          inputClass={classes.newContactField}
        />
        <Field
          placeholder={"Phone"}
          name={"phone"}
          inputClass={classes.newContactField}
        />
        <Field
          placeholder={"Email"}
          name={"email"}
          inputClass={classes.newContactField}
        />
      </div>
      <Button name={"Submit"} />
    </form>
  );
};

export default Form;
