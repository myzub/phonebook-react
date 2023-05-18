import React, { Component } from "react";
import classes from "./Modal.module.css";

const closeIcon = require("../../img/close.png");

class Modal extends Component {
  // TODO create separate edit and delete components

  renderEditModal() {
    const {
      currentContact: { name, phone, email },
      updateInputValue,
      modalSubmitHandler,
      hideModal,
    } = this.props;
    console.log("in renderEditModal! " + name);

    return (
      <div className={classes.Modal}>
        <div className={classes.headerWrapper}>
          <h3>Edit {name}?</h3>
          <img src={closeIcon} alt="close" onClick={hideModal} />
        </div>
        <form>
          <div className={classes.inputWrapper}>
            <span>Name</span>
            <input
              name={"name"}
              type="text"
              defaultValue={name}
              onChange={updateInputValue}
            />
            <span>Phone</span>
            <input
              name={"phone"}
              type="text"
              defaultValue={phone}
              onChange={updateInputValue}
            />
            <span>Email</span>
            <input
              type="text"
              name={"email"}
              defaultValue={email}
              onChange={updateInputValue}
              autoComplete="off"
            />
          </div>
          <div className={classes.buttonWrapper}>
            <button
              className={classes.submitButton}
              onClick={() => {
                modalSubmitHandler();
                hideModal();
              }}
            >
              OK
            </button>
            <button className={classes.cancelButton} onClick={hideModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  renderDeleteModal() {
    const {
      currentContact: { name },
      modalSubmitHandler,
      hideModal,
    } = this.props;

    return (
      <div className={classes.Modal}>
        <div className={classes.headerWrapper}>
          <h3>Delete {name}?</h3>
          <img src={closeIcon} alt="close" onClick={hideModal} />
        </div>
        <div className={classes.marginDiv}></div>
        <div className={classes.buttonWrapper}>
          <button
            onClick={() => {
              hideModal();
              modalSubmitHandler();
            }}
            className={classes.submitButton}
          >
            OK
          </button>
          <button className={classes.cancelButton} onClick={hideModal}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  renderByType() {
    const { modalType } = this.props;
    if (modalType) {
      if (modalType === "edit") {
        return this.renderEditModal();
      } else if (modalType === "delete") {
        return this.renderDeleteModal();
      }
    }
  }

  render() {
    return <>{this.renderByType()}</>;
  }
}

export default Modal;
