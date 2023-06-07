import React from "react";
import classes from "./PhonebookList.module.css";
import PhonebookItem from "./PhonebookItem/PhonebookItem";
import { useSelector } from "react-redux";

const PhonebookList = () => {
  const renderList = usePhonebookList();

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
          {renderList.map((contact) => (
            <PhonebookItem contact={contact} key={contact.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

function usePhonebookList() {
  const searchIsEmpty = useSelector((state) => state.phonebook.searchIsEmpty);
  const filteredList = useSelector((state) => state.phonebook.filteredList);
  const contactList = useSelector((state) => state.phonebook.contactList);

  return searchIsEmpty ? contactList : filteredList;
}

export default PhonebookList;
