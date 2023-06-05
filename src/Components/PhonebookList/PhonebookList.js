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
          {props.contactList.map((contact) => (
            <PhonebookItem contact={contact} key={contact.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PhonebookList;
