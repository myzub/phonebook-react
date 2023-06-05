import React from "react";
import classes from "./Icon.module.css";
import { connect } from "react-redux";
import { contactIconClickHandler } from "../../store/actions/phonebook";

const Icon = (props) => {
  const { src, alt, name, contactId } = props;
  return (
    <img
      src={src}
      alt={alt}
      name={name}
      id={contactId}
      className={classes.Icon}
      onClick={() => props.contactIconClickHandler(contactId, name)}
    />
  );
};

function mapDispatchToProps(dispatch) {
  return {
    contactIconClickHandler: (id, modalType) =>
      dispatch(contactIconClickHandler(id, modalType)),
  };
}

export default connect(null, mapDispatchToProps)(Icon);
