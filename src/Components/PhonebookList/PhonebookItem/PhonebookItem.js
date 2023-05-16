import React from "react";
import classes from "./PhonebookItem.module.css";
import Icon from "../../Icon/Icon";

const PhonebookItem = (props) => {
  const editIcon = require("../../../img/edit.png");
  const deleteIcon = require("../../../img/delete.png");
  return (
    <tr className={classes.PhonebookItem}>
      <td>{props.item.name}</td>
      <td>{props.item.phone}</td>
      <td>{props.item.email}</td>
      <td>
        <Icon
          src={editIcon}
          alt={"edit"}
          onClickHandler={props.openEditModal}
          contactId={props.item.id}
        />
        <Icon
          src={deleteIcon}
          alt={"delete"}
          onClickHandler={props.openDeleteModal}
          contactId={props.item.id}
        />
      </td>
    </tr>
  );
};

export default PhonebookItem;
