import React, { Component } from "react";
import classes from "./PhonebookItem.module.css";
import Icon from "../../Icon/Icon";

const PhonebookItem = (props) => {
  return (
    <tr className={classes.PhonebookItem}>
      <td>{props.item.name}</td>
      <td>{props.item.phone}</td>
      <td>{props.item.email}</td>
      <td>
        <Icon />
      </td>
    </tr>
  );
};

export default PhonebookItem;
