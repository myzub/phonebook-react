import React, { useEffect } from "react";
import classes from "./PhonebookList.module.css";
import PhonebookItem from "./PhonebookItem/PhonebookItem";
import { useDispatch, useSelector } from "react-redux";
import { setNewContactList, toggleLoader } from "../../store/actions/phonebook";
import Loader from "../Loader/Loader";

const PhonebookList = () => {
  const isLoading = useSelector((state) => state.phonebook.loading);
  const searchIsEmpty = useSelector((state) => state.phonebook.searchIsEmpty);
  const filteredList = useSelector((state) => state.phonebook.filteredList);
  const contactList = useSelector((state) => state.phonebook.contactList);
  const renderList = searchIsEmpty ? contactList : filteredList;

  const dispatch = useDispatch();
  const fetchContactListDispatch = (list) => dispatch(setNewContactList(list));
  const toggleLoaderDispatch = (toggle) => dispatch(toggleLoader(toggle));

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchContactList = async () => {
      try {
        toggleLoaderDispatch(true);
        const response = await fetch(url);
        const json = await response.json();
        fetchContactListDispatch(json);
        toggleLoaderDispatch(false);
      } catch (error) {
        console.log("error", error);
        toggleLoaderDispatch(true);
      }
    };
    fetchContactList();
  }, []);

  return isLoading ? (
    <>
      <Loader />
    </>
  ) : (
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

export default PhonebookList;
