import React, { Component } from "react";
import classes from "./Phonebook.module.css";

import Button from "../Components/Button/Button";
import Field from "../Components/Field/Field";
import Form from "../Components/Form/Form";
import Loader from "../Components/Loader/Loader";
import Modal from "../Components/Modal/Modal";
import PhonebookList from "../Components/PhonebookList/PhonebookList";

class Phonebook extends Component {
  render() {
    return (
      <div className={classes.Phonebook}>
        <div className={classes.PhonebookWrapper}>
          <h1 style={{textAlign: "center", marginBottom: "10px"}}>Phonebook</h1>
          <Form/>
          <PhonebookList />


          {/*<Button />*/}
          {/*<Field />*/}
          {/*<Icon />*/}
          {/*<Loader />*/}
          {/*<Modal />*/}
        </div>
      </div>
    );
  }
}

export default Phonebook;
