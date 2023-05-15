import React from "react";
import classes from "./Icon.module.css";

const Icon = (props) => {
  return (
    <>
      <img
        src={props.src}
        alt={props.alt}
        className={classes.Icon}
        onClick={() => {
          props.onClickHandler(props.contactId);
        }}
      />
    </>
  );
};

export default Icon;
