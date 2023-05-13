import React, { Component } from "react";
import classes from "./Phonebook.module.css";

import Form from "../Components/Form/Form";
import Loader from "../Components/Loader/Loader";
import Modal from "../Components/Modal/Modal";
import PhonebookList from "../Components/PhonebookList/PhonebookList";

// TODO add new contact to the state
// TODO search handler
// TODO icon delete handler
// TODO icon edit handler
// TODO Modal windows
// TODO fetch data from origin

class Phonebook extends Component {
  state = {
    contactList: [
      {
        name: "Michael",
        phone: "1231231",
        email: "qwerty@asd.com",
      },
      {
        name: "Denys",
        phone: "343434",
        email: "asdfgh@qwe.com",
      },
      {
        name: "YOLO",
        phone: "56565656",
        email: "zxcvb@vbc.com",
      },
    ],
  };

  render() {
    return (
      <div className={classes.Phonebook}>
        <div className={classes.PhonebookWrapper}>
          <h1>Phonebook</h1>
          <Form />
          <PhonebookList contactList={this.state.contactList} />
        </div>
      </div>
    );
  }
}

export default Phonebook;
