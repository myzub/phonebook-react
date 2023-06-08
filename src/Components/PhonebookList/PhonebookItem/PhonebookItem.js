import React from "react";
import classes from "./PhonebookItem.module.css";
import Icon from "../../Icon/Icon";
import { useDispatch } from "react-redux";
import { openModal } from "../../../store/actions/phonebook";

const editIcon = require("../../../img/edit.png");
const deleteIcon = require("../../../img/delete.png");

const PhonebookItem = (props) => {
  const {
    contact: { id, name, phone, email },
  } = props;

  const dispatch = useDispatch();
  const openModalDispatch = (currentContact, modalType) =>
    dispatch(openModal(currentContact, modalType));

  return (
    <tr className={classes.PhonebookItem}>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <Icon
          src={editIcon}
          alt={"EDIT"}
          name={"EDIT"}
          contactId={id}
          onClick={() => openModalDispatch(props.contact, "EDIT")}
        />
        <Icon
          src={deleteIcon}
          alt={"DELETE"}
          name={"DELETE"}
          contactId={id}
          onClick={() => openModalDispatch(props.contact, "DELETE")}
        />
      </td>
    </tr>
  );
};

export default PhonebookItem;
