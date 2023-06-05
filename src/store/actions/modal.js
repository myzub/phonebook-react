import {
  CLOSE_MODAL,
  SET_NEW_CONTACT_LIST,
  UPDATE_INPUT_VALUE,
} from "./actionTypes";

export function closeModal() {
  return { type: CLOSE_MODAL };
}

export function setNewContactList(newContactList) {
  return { type: SET_NEW_CONTACT_LIST, newContactList };
}

export function modalSubmitHandler() {
  return (dispatch, getState) => {
    const { contactList, currentContact, modalType, editedContact } =
      getState().phonebook;

    // TODO find item not by index but by id
    const index = contactList.indexOf(currentContact);
    let newContactList = [...contactList];

    switch (modalType) {
      case "EDIT":
        // const { id } = this.props.currentContact;
        // this.props.contactList.map((item) => {
        //   if (id === item.id) {
        //
        //     return this.props.editedContact;
        //   }
        //   return item;
        // });
        newContactList.splice(index, 1, editedContact);
        break;
      case "DELETE":
        contactList.splice(index, 1);
        break;
      default:
        break;
    }

    dispatch(setNewContactList(newContactList));
  };
    
}

export function updateInputValue(name, value) {
  const editedContact = { [name]: value };

  return {
    type: UPDATE_INPUT_VALUE,
    editedContact
  };
  // this.setState((prev) => {
  //   return {
  //    editedContact: { ...prev.editedContact, [name]: value },
  //   };
  // });
}
