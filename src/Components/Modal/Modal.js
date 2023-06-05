import React, { Component } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { connect } from "react-redux";
import {
  closeModal,
  modalSubmitHandler,
  updateInputValue,
} from "../../store/actions/modal";

const closeIcon = require("../../img/close.png");

class Modal extends Component {
  // TODO create separate edit and delete components
  // TODO close on background click
  // TODO add dark background

  renderEditModal() {
    const { name, phone, email } = this.props.currentContact;

    return (
      <div className={classes.Modal}>
        <div className={classes.headerWrapper}>
          <h3>Edit {name}?</h3>
          <img src={closeIcon} alt="close" onClick={this.props.closeModal} />
        </div>
        <form>
          <div className={classes.inputWrapper}>
            <span>Name</span>
            <input
              name={"name"}
              type="text"
              defaultValue={name}
              onChange={this.props.updateInputValue}
            />
            <span>Phone</span>
            <input
              name={"phone"}
              type="text"
              defaultValue={phone}
              onChange={this.props.updateInputValue}
            />
            <span>Email</span>
            <input
              type="text"
              name={"email"}
              defaultValue={email}
              onChange={this.props.updateInputValue}
              autoComplete="off"
            />
          </div>
          <div className={classes.buttonWrapper}>
            <button
              className={classes.submitButton}
              onClick={() => {
                this.props.modalSubmitHandler();
                this.props.closeModal();
              }}
            >
              OK
            </button>
            <button
              className={classes.cancelButton}
              onClick={this.props.closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  renderDeleteModal() {
    return (
      <div className={classes.Modal}>
        <div className={classes.headerWrapper}>
          <h3>Delete {this.props.name}?</h3>
          <img src={closeIcon} alt="close" onClick={this.props.closeModal} />
        </div>
        <div className={classes.marginDiv}></div>
        <div className={classes.buttonWrapper}>
          <button
            onClick={() => {
              this.props.modalSubmitHandler();
              this.props.closeModal();
            }}
            className={classes.submitButton}
          >
            OK
          </button>
          <button
            className={classes.cancelButton}
            onClick={this.props.closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  render() {
    return ReactDOM.createPortal(
      <div className={classes.modalBackdrop}>
        {this.props.modalType === "EDIT"
          ? this.renderEditModal()
          : this.props.modalType === "DELETE"
          ? this.renderDeleteModal()
          : null}
      </div>,
      document.getElementById("modal-root")
    );
  }
}

function mapStateToProps(state) {
  const { modalType, currentContact } = state.phonebook;
  return { modalType, currentContact };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => dispatch(closeModal()),
    modalSubmitHandler: () => dispatch(modalSubmitHandler()),
    updateInputValue: (event) =>
      dispatch(updateInputValue(event.target.name, event.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
