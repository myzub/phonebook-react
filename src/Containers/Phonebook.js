import classes from "./Phonebook.module.css";
import Loader from "../Components/Loader/Loader";
import Form from "../Components/Form/Form";
import Modal from "../Components/Modal/Modal";
import PhonebookList from "../Components/PhonebookList/PhonebookList";
import { useSelector } from "react-redux";

// TODO fetch data from origin
// TODO save to localStorage
// TODO close modal on outside click
// TODO form in modal
// TODO fields in forms
// TODO refactor with hooks
// TODO add modal action, reducer and insert openModal, closeModal?

const Phonebook = () => {
  const loading = useSelector((state) => state.phonebook.loading);

  return (
    <div className={classes.Phonebook}>
      <div className={classes.PhonebookWrapper}>
        <h1>Phonebook</h1>
        <Form />
        {loading ? <Loader /> : <PhonebookList />}
        <Modal />
      </div>
    </div>
  );
};

export default Phonebook;
