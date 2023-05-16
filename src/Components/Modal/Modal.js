import React, { Component } from "react";
import classes from "./Modal.module.css";

class Modal extends Component {
  closeIcon = require("../../img/close.png");

  renderEditModal() {
    return (
      <div className={classes.Modal}>
        <div className={classes.headerWrapper}>
          <h3>Edit {this.props.currentContact.name}?</h3>
          <img
            src={this.closeIcon}
            alt="close"
            onClick={this.props.hideModal}
          />
        </div>
        <form>
          <div className={classes.inputWrapper}>
            <span>Name</span>
            <input
              id={"inputName"}
              type="text"
              defaultValue={this.props.currentContact.name}
            />
            <span>Phone</span>
            <input
              id={"inputPhone"}
              type="text"
              defaultValue={this.props.currentContact.phone}
            />
            <span>Email</span>
            <input
              id={"inputEmail"}
              type="text"
              defaultValue={this.props.currentContact.email}
              autoComplete="off"
            />
          </div>
          <div className={classes.buttonWrapper}>
            <button
              className={classes.submitButton}
              onClick={() => {
                const name = document.getElementById("inputName").value;
                const phone = document.getElementById("inputPhone").value;
                const email = document.getElementById("inputEmail").value;
                const editedContact = {
                  id: this.props.currentContact.id,
                  name,
                  phone,
                  email,
                };
                this.props.modalHandler(editedContact);
                this.props.hideModal();
              }}
            >
              OK
            </button>
            <button
              className={classes.cancelButton}
              onClick={this.props.hideModal}
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
          <h3>Delete {this.props.currentContact.name}?</h3>
          <img
            src={this.closeIcon}
            alt="close"
            onClick={this.props.hideModal}
          />
        </div>
        <div className={classes.marginDiv}></div>
        <div className={classes.buttonWrapper}>
          <button
            onClick={() => {
              this.props.hideModal();
              this.props.modalHandler();
            }}
            className={classes.submitButton}
          >
            OK
          </button>
          <button
            className={classes.cancelButton}
            onClick={this.props.hideModal}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  renderByType() {
    if (this.props.modalType) {
      if (this.props.modalType === "edit") {
        return this.renderEditModal();
      } else if (this.props.modalType === "delete") {
        return this.renderDeleteModal();
      }
    }
  }

  render() {
    return <>{this.renderByType()}</>;
  }
}

export default Modal;
