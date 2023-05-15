import React from "react";
import classes from "./PhonebookList.module.css";
import PhonebookItem from "./PhonebookItem/PhonebookItem";

const PhonebookList = (props) => {
  return (
    <>
      <table className={classes.PhonebookList}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.contactList.map((item, key) => (
            <PhonebookItem
              item={item}
              key={key}
              editButtonHandler={props.editButtonHandler}
              deleteButtonHandler={props.deleteButtonHandler}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PhonebookList;
