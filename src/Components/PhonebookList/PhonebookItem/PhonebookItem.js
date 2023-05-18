import React from "react";
import classes from "./PhonebookItem.module.css";
import Icon from "../../Icon/Icon";

const editIcon = require("../../../img/edit.png");
const deleteIcon = require("../../../img/delete.png");

const PhonebookItem = (props) => {
  const {
    contact: { id, name, phone, email },
    openModal,
  } = props;

  return (
    <tr className={classes.PhonebookItem}>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <Icon
          src={editIcon}
          alt={"edit"}
          name={"edit"}
          openModal={openModal}
          contactId={id}
        />
        <Icon
          src={deleteIcon}
          alt={"delete"}
          name={"delete"}
          openModal={openModal}
          contactId={id}
        />
      </td>
    </tr>
  );
};

export default PhonebookItem;
