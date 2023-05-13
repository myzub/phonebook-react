import React from "react";
import classes from "./PhonebookList.module.css";
import PhonebookItem from "./PhonebookItem/PhonebookItem";

const PhonebookList = (props) => {
  return (
    <>
      <table className={classes.PhonebookList}>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th></th>
        </tr>
        {props.contactList.map((item, key) => (
          <PhonebookItem item={item} key={key} />
        ))}
      </table>
    </>
  );
};

export default PhonebookList;
