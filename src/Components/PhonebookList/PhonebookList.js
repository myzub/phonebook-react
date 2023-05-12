import React, { Component } from "react";
import classes from "./PhonebookList.module.css";
import PhonebookItem from "./PhonebookItem/PhonebookItem";

class PhonebookList extends Component {
  render() {
    return (
      <div className={classes.PhonebookList}>
        <PhonebookItem />
      </div>
    );
  }
}

export default PhonebookList;
