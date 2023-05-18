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
          {props.contactList.map((contact, key) => (
            <PhonebookItem
              contact={contact}
              key={key}
              openModal={props.openModal}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PhonebookList;
