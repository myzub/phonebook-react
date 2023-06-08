import classes from "./Phonebook.module.css";
import Form from "../Components/Form/Form";
import Modal from "../Components/Modal/Modal";
import PhonebookList from "../Components/PhonebookList/PhonebookList";

const Phonebook = () => {
  return (
    <div className={classes.Phonebook}>
      <h1>Phonebook</h1>
      <Form />
      <PhonebookList />
      <Modal />
    </div>
  );
};

export default Phonebook;
