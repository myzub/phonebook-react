import React, { useEffect } from "react";
import classes from "./PhonebookList.module.css";
import PhonebookItem from "./PhonebookItem/PhonebookItem";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import fetchContactList from "../../api/fetchContactList";

const PhonebookList = () => {
  const { isLoading, renderList, fetchContactListDispatch } =
    usePhonebookList();

  useEffect(() => {
    fetchContactListDispatch();
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

function usePhonebookList() {
  const dispatch = useDispatch();
  const fetchContactListDispatch = () => dispatch(fetchContactList());

  const isLoading = useSelector((state) => state.phonebook.loading);
  const searchIsEmpty = useSelector((state) => state.phonebook.searchIsEmpty);
  const filteredList = useSelector((state) => state.phonebook.filteredList);
  const contactList = useSelector((state) => state.phonebook.contactList);
  const renderList = searchIsEmpty ? contactList : filteredList;

  return {
    isLoading,
    renderList,
    fetchContactListDispatch,
  };
}

export default PhonebookList;
