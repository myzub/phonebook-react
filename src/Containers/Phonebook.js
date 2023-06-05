import React, { Component } from "react";
import classes from "./Phonebook.module.css";
import Loader from "../Components/Loader/Loader";
import Form from "../Components/Form/Form";
import Modal from "../Components/Modal/Modal";
import PhonebookList from "../Components/PhonebookList/PhonebookList";
import { connect } from "react-redux";
import { closeModal } from "../store/actions/modal";

// TODO fetch data from origin
// TODO save to localStorage
// TODO close modal on outside click
// TODO form in modal
// TODO fields in forms
// TODO refactor with hooks

class Phonebook extends Component {
  escCloseModal = (event) => {
    if (event.key === "Escape") {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.escCloseModal, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escCloseModal, false);
  }

  render() {
    const list = this.props.searchIsEmpty
      ? this.props.contactList
      : this.props.filteredList;
    return (
      <div className={classes.Phonebook}>
        <div className={classes.PhonebookWrapper}>
          <h1>Phonebook</h1>
          <Form />
          {this.props.loading ? (
            <Loader />
          ) : (
            <PhonebookList contactList={list} />
          )}
          <Modal />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loading, searchIsEmpty, filteredList, contactList } = state.phonebook;
  return {
    loading,
    searchIsEmpty,
    filteredList,
    contactList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => dispatch(closeModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
