import React from "react";
import classes from "./Form.module.css";
import Field from "../Field/Field";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { submitHandler, searchHandler } from "../../store/actions/phonebook";

const Form = (props) => {
  return (
    <form className={classes.Form} onSubmit={props.submitHandler}>
      <Field
        placeholder={"Search"}
        name={"search"}
        searchHandler={props.searchHandler}
      />
      <div className="field-wrapper">
        <Field placeholder={"Name"} name={"name"} />
        <Field placeholder={"Phone"} name={"phone"} />
        <Field placeholder={"Email"} name={"email"} />
      </div>
      <Button name={"Submit"} />
    </form>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    submitHandler: (event) => dispatch(submitHandler(event)),
    searchHandler: (event) => dispatch(searchHandler(event)),
  };
}

export default connect(null, mapDispatchToProps)(Form);
