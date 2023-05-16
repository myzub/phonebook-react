import React, { Component } from "react";
import classes from "./Modal.module.css";

class Modal extends Component {
  modalType = this.props.modalType;
  closeIcon = require("../../img/close.png");

  renderEditModal() {
    return (
      <div className={classes.Modal}>
        <div className={classes.headerWrapper}>
          <h3>Edit name</h3>
          <img src={this.closeIcon} alt="close" />
        </div>
        <form action="">
          <div className={classes.inputWrapper}>
            <span>Name</span>
            <input type="text" />
            <span>Phone</span>
            <input type="text" />
            <span>Email</span>
            <input type="text" />
          </div>
          <div className={classes.buttonWrapper}>
            <button type={"submit"} className={classes.submitButton}>
              OK
            </button>
            <button className={classes.cancelButton}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }

  renderDeleteModal() {
    return (
      <div className={classes.Modal}>
        <div className={classes.headerWrapper}>
          <h3>Delete name?</h3>
          <img src={this.closeIcon} alt="close" />
        </div>
        <div className={classes.marginDiv}></div>
        <div className={classes.buttonWrapper}>
          <button type={"submit"} className={classes.submitButton}>
            OK
          </button>
          <button className={classes.cancelButton}>Cancel</button>
        </div>
      </div>
    );
  }

  renderByType() {
    if (this.modalType) {
      if (this.modalType === "edit") {
        return this.renderEditModal();
      } else if (this.modalType === "delete") {
        return this.renderDeleteModal();
      }
    }
  }

  render() {
    return <>{this.renderByType()}</>;
  }
}

export default Modal;
