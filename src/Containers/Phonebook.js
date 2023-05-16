import React, { Component } from "react";
import classes from "./Phonebook.module.css";

import Form from "../Components/Form/Form";
// import Loader from "../Components/Loader/Loader";
import Modal from "../Components/Modal/Modal";
import PhonebookList from "../Components/PhonebookList/PhonebookList";

// TODO Modal windows
// TODO Modal fetch data
// TODO Modal update modaltype in state
// TODO Modal button handlers
// TODO Modal edit and delete logic

// TODO fetch data from origin

class Phonebook extends Component {
  state = {
    searchIsEmpty: true,
    filteredArray: [],
    modalType: null,
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

    this.searchIsEmptyToggle(searchQuery);

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
    toggle
      ? this.setState({
          searchIsEmpty: false,
        })
      : this.setState({
          searchIsEmpty: true,
        });
  }

  editButtonHandler = (id) => {
    this.setState({ modalType: "edit" });

    // const contactToEdit = this.state.contactList.find((key) => id === key.id);
    // const isEditedName = window.prompt(`edit -${contactToEdit.name}- name?`);
    // if (isEditedName) {
    //   const index = this.state.contactList.indexOf(contactToEdit);
    //   let tempContactList = [...this.state.contactList];
    //
    //   contactToEdit.name = isEditedName;
    //   tempContactList.splice(index, 1, contactToEdit);
    //   this.setState({ contactList: tempContactList });
    // }
  };

  deleteButtonHandler = (id) => {
    this.setState({ modalType: "delete" });

    // const contactToDelete = this.state.contactList.find((key) => id === key.id);
    // if (window.confirm(`delete ${contactToDelete.name}?`)) {
    //   const index = this.state.contactList.indexOf(contactToDelete);
    //   let tempContactList = [...this.state.contactList];
    //
    //   tempContactList.splice(index, 1);
    //   this.setState({ contactList: tempContactList });
    // }
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
            onSubmit={this.handleSubmit}
            searchHandler={this.searchHandler}
          />
          {
            // TODO refactor PhonebookList display code
            this.state.searchIsEmpty ? (
              <PhonebookList
                contactList={this.state.contactList}
                editButtonHandler={this.editButtonHandler}
                deleteButtonHandler={this.deleteButtonHandler}
              />
            ) : (
              <PhonebookList
                contactList={this.state.filteredList}
                editButtonHandler={this.editButtonHandler}
                deleteButtonHandler={this.deleteButtonHandler}
              />
            )
          }
          <Modal modalType={this.state.modalType} hideModal={this.hideModal} />
        </div>
      </div>
    );
  }
}

export default Phonebook;
