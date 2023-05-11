import React, { Component } from "react";
import classes from "./PhonebookItem.module.css";

class PhonebookItem extends Component {
  render() {
    return (
      <div className={classes.PhonebookItem}>
        <h1>PhonebookItem</h1>
      </div>
    );
  }
}

export default PhonebookItem;
