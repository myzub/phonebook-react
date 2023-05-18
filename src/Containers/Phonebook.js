import React, { Component } from "react";
import classes from "./Phonebook.module.css";

import Form from "../Components/Form/Form";
// import Loader from "../Components/Loader/Loader";
import Modal from "../Components/Modal/Modal";
import PhonebookList from "../Components/PhonebookList/PhonebookList";

// TODO fetch data from origin

class Phonebook extends Component {
  state = {
    searchIsEmpty: true,
    filteredArray: [],
    modalType: null,
    currentContact: null,
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

  submitHandler = (event) => {
    event.preventDefault();
    const target = event.target;
    // TODO id generates on server, so to delete next row
    const id = Date.now();
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

  searchHandler = (event) => {
    const searchQuery = event.target.value;

    this.searchIsEmptyToggle(!!searchQuery);

    const filteredList = this.state.contactList.filter((item) => {
      return (
        item.name.includes(searchQuery) ||
        item.phone.includes(searchQuery) ||
        item.email.includes(searchQuery)
      );
    });

    this.setState({
      filteredList,
    });
  };

  searchIsEmptyToggle(toggle) {
    this.setState({
      searchIsEmpty: !toggle,
    });
  }

  openEditModal = (id) => {
    this.setCurrentContact(id);
    this.setState({ modalType: "edit" });
  };

  openDeleteModal = (id) => {
    this.setCurrentContact(id);
    this.setState({ modalType: "delete" });
  };

  setCurrentContact = (id) => {
    const currentContact = this.state.contactList.find((key) => id === key.id);
    this.setState({ currentContact });
  };

  modalHandler = (editedContact) => {
    const index = this.state.contactList.indexOf(this.state.currentContact);
    let newContactList = [...this.state.contactList];

    switch (this.state.modalType) {
      case "edit":
        newContactList.splice(index, 1, editedContact);
        break;
      case "delete":
        newContactList.splice(index, 1);
        break;
      default:
        break;
    }

    this.setState({ contactList: newContactList, currentContact: null });
  };

  hideModal = () => {
    this.setState({ modalType: null });
  };

  escCloseModal = (event) => {
    if (event.key === "Escape") {
      this.hideModal();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.escCloseModal, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escCloseModal, false);
  }

  render() {
    return (
      <div className={classes.Phonebook}>
        <div className={classes.PhonebookWrapper}>
          <h1>Phonebook</h1>
          <Form
            onSubmit={this.submitHandler}
            searchHandler={this.searchHandler}
          />
          {
            // TODO refactor PhonebookList display code
            this.state.searchIsEmpty ? (
              <PhonebookList
                contactList={this.state.contactList}
                openEditModal={this.openEditModal}
                openDeleteModal={this.openDeleteModal}
              />
            ) : (
              <PhonebookList
                contactList={this.state.filteredList}
                openEditModal={this.openEditModal}
                openDeleteModal={this.openDeleteModal}
              />
            )
          }
          <Modal
            modalType={this.state.modalType}
            currentContact={this.state.currentContact}
            editedContact={this.editedContact}
            hideModal={this.hideModal}
            modalHandler={this.modalHandler}
          />
        </div>
      </div>
    );
  }
}

export default Phonebook;
