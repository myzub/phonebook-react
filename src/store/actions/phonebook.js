import {
  ADD_NEW_CONTACT,
  OPEN_MODAL,
  SEARCH_IS_EMPTY_TOGGLE,
  SET_FILTERED_LIST,
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

export function openModal(modalType, currentContact) {
  return {
    type: OPEN_MODAL,
    modalType,
    currentContact,
  };
}

export function contactIconClickHandler(id, modalType) {
  return (dispatch, getState) => {
    const currentContact = getState().phonebook.contactList.find(
      (contact) => id === contact.id
    );
    dispatch(openModal(modalType, currentContact));
  };
}
