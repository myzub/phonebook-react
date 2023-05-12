import React, { Component } from "react";
import classes from "./PhonebookItem.module.css";
import Icon from "../../Icon/Icon";

class PhonebookItem extends Component {
  render() {
    return (
      <div className={classes.PhonebookItem}>
        <table>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td><Icon/></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default PhonebookItem;
