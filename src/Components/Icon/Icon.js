import React from "react";
import classes from "./Icon.module.css";

const Icon = () => {
  const editIcon = require("../../img/edit.png");
  const deleteIcon = require("../../img/delete.png");
  return (
    <div className={classes.iconContainer}>
      <img src={editIcon} alt="edit" className={classes.Icon} />
      <img src={deleteIcon} alt="delete" className={classes.Icon} />
    </div>
  );
};

export default Icon;
