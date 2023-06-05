import {
  ADD_NEW_CONTACT,
  CLOSE_MODAL,
  OPEN_MODAL,
  SEARCH_IS_EMPTY_TOGGLE,
  SET_FILTERED_LIST,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  searchIsEmpty: true,
  filteredList: [],
  contactList: [
    {
      id: 1,
      name: "Michael",
      phone: "1231231",
      email: "qwerty@asd.com",
    },
    {
      id: 2,
      name: "Denys",
      phone: "343434",
      email: "asdfgh@qwe.com",
    },
  ],
};

export default function phonebook(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_CONTACT:
      return {
        ...state,
        contactList: [...state.contactList, action.newContact],
      };
    case OPEN_MODAL:
      return {
        ...state,
        modalType: action.modalType,
        currentContact: action.currentContact,
        editedContact: action.currentContact,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalType: null,
        currentContact: null,
        editedContact: {},
      };
    case SEARCH_IS_EMPTY_TOGGLE:
      return { ...state, searchIsEmpty: !action.toggle };
    case SET_FILTERED_LIST:
      return { ...state, filteredList: action.filteredList };
    default:
      return state;
  }
}
