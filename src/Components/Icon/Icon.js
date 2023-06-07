import React from "react";
import classes from "./Icon.module.css";

const Icon = (props) => {
  const { src, alt, name, contactId } = props;
  return (
    <img
      src={src}
      alt={alt}
      name={name}
      id={contactId}
      className={classes.Icon}
      onClick={props.onClick}
    />
  );
};

export default Icon;
