import React, { Component } from "react";
import classes from "./Phonebook.module.css";

import Form from "../Components/Form/Form";
// import Loader from "../Components/Loader/Loader";
import Modal from "../Components/Modal/Modal";
import PhonebookList from "../Components/PhonebookList/PhonebookList";

// TODO fetch data from origin
// TODO Loader
// save to localStorage
// react portal
// modal outside main
// close modal on outside click
// form in modal
// fields in forms

class Phonebook extends Component {
  state = {
    searchIsEmpty: true,
    filteredArray: [],
    modalType: null,
    currentContact: null,
    editedContact: {},
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

  openModal = (id, name) => {
    const currentContact = this.state.contactList.find((key) => id === key.id);
    this.setState({ modalType: name, currentContact });
  };

  updateInputValue = (event) => {
    const { value, name } = event.target;
    this.setState((prev) => {
      return {
        editedContact: { ...prev.editedContact, [name]: value },
      };
    });
  };

  modalSubmitHandler = () => {
    if (
      !(
        this.state.editedContact.name &&
        this.state.editedContact.phone &&
        this.state.editedContact.email
      )
    ) {
      return;
    }
    const { id } = this.state.currentContact;
    const index = this.state.contactList.indexOf(this.state.currentContact);
    let newContactList = [...this.state.contactList];

    this.setState((prevState) => ({
      editedContact: {
        ...prevState.editedContact,
        id,
      },
    }));

    switch (this.state.modalType) {
      case "edit":
        console.log("editedContact: " + this.state.editedContact);

        // const updatedList = this.state.contactList.map((item) => {
        //   if (id === item.id) {
        //     return this.state.editedContact;
        //   }
        //   return item;
        // });

        newContactList.splice(index, 1, this.state.editedContact);
        break;
      case "delete":
        newContactList.splice(index, 1);
        break;
      default:
        break;
    }

    this.setState({
      contactList: newContactList,
      currentContact: null,
      editedContact: {},
    });
  };

  // TODO refactor/delete hideModal
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
    const list = this.state.searchIsEmpty
      ? this.state.contactList
      : this.state.filteredList;

    return (
      <div className={classes.Phonebook}>
        <div className={classes.PhonebookWrapper}>
          <h1>Phonebook</h1>
          <Form
            onSubmit={this.submitHandler}
            searchHandler={this.searchHandler}
          />
          <PhonebookList contactList={list} openModal={this.openModal} />
          <Modal
            modalType={this.state.modalType}
            currentContact={this.state.currentContact}
            hideModal={this.hideModal}
            modalSubmitHandler={this.modalSubmitHandler}
            updateInputValue={this.updateInputValue}
          />
        </div>
      </div>
    );
  }
}

export default Phonebook;
