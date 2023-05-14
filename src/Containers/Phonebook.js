import React, { Component } from "react";
import classes from "./Phonebook.module.css";

import Form from "../Components/Form/Form";
import Loader from "../Components/Loader/Loader";
import Modal from "../Components/Modal/Modal";
import PhonebookList from "../Components/PhonebookList/PhonebookList";

// TODO search handler
// TODO icon delete handler
// TODO icon edit handler
// TODO Modal windows
// TODO fetch data from origin

class Phonebook extends Component {
  state = {
    contactList: [
      {
        id: 1,
        name: "Michael",
        phone: "1231231",
        email: "qwerty@asd.com",
      },
      {
        id: 2,
        name: "Denys",
        phone: "343434",
        email: "asdfgh@qwe.com",
      },
    ],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    // TODO id generates on server, so to delete next row
    const id = Math.round(Date.now() / 100000000);
    const name = target.name.value;
    const phone = target.phone.value;
    const email = target.email.value;
    const newContact = {
      id,
      name,
      phone,
      email,
    };

    if (!(name || phone || email)) {
      return;
    }

    this.setState((prevState) => ({
      contactList: [...prevState.contactList, newContact],
    }));
  };

  render() {
    return (
      <div className={classes.Phonebook}>
        <div className={classes.PhonebookWrapper}>
          <h1>Phonebook</h1>
          <Form onSubmit={this.handleSubmit} />
          <PhonebookList contactList={this.state.contactList} />
        </div>
      </div>
    );
  }
}

export default Phonebook;
