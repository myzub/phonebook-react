import {
  ADD_NEW_CONTACT,
  CLOSE_MODAL,
  OPEN_MODAL,
  SEARCH_IS_EMPTY_TOGGLE,
  SET_FILTERED_LIST,
  SET_NEW_CONTACT_LIST,
  UPDATE_CONTACT,
} from "./actionTypes";

export function submitHandler(event) {
  return (dispatch) => {
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

    dispatch(addNewContact(newContact));
  };
}

export function addNewContact(newContact) {
  return {
    type: ADD_NEW_CONTACT,
    newContact,
  };
}

export function searchIsEmptyToggle(toggle) {
  return {
    type: SEARCH_IS_EMPTY_TOGGLE,
    toggle,
  };
}

export function setFilteredList(filteredList) {
  return {
    type: SET_FILTERED_LIST,
    filteredList,
  };
}

export function searchHandler(event) {
  return (dispatch, getState) => {
    const contactList = getState().phonebook.contactList;
    const searchQuery = event.target.value;

    dispatch(searchIsEmptyToggle(!!searchQuery));

    const filteredList = contactList.filter((item) => {
      return (
        item.name.includes(searchQuery) ||
        item.phone.includes(searchQuery) ||
        item.email.includes(searchQuery)
      );
    });
    dispatch(setFilteredList(filteredList));
  };
}

export function openModal(currentContact, modalType) {
  return {
    type: OPEN_MODAL,
    currentContact,
    modalType,
  };
}

export function closeModal() {
  return { type: CLOSE_MODAL };
}

export function updateContact(name, value) {
  return {
    type: UPDATE_CONTACT,
    name,
    value,
  };
}

export function setNewContactList(newContactList) {
  return { type: SET_NEW_CONTACT_LIST, newContactList };
}

export function modalSubmitHandler() {
  return (dispatch, getState) => {
    const { contactList, currentContact, modalType, editedContact } =
      getState().phonebook;
    const { id } = currentContact;
    let newContactList;

    switch (modalType) {
      case "EDIT":
        dispatch(updateContact("id", id));
        newContactList = contactList.map((item) => {
          if (item.id === id) {
            return editedContact;
          }
          return item;
        });
        break;
      case "DELETE":
        newContactList = contactList.filter((item) => item.id !== id);
        break;
      default:
        break;
    }

    dispatch(setNewContactList(newContactList));
    dispatch(closeModal());
  };
}
