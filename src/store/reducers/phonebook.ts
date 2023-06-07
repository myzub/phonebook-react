import {
  ADD_NEW_CONTACT,
  OPEN_MODAL,
  SEARCH_IS_EMPTY_TOGGLE,
  SET_FILTERED_LIST,
  SET_NEW_CONTACT_LIST,
  CLOSE_MODAL,
  UPDATE_CONTACT,
} from "../actions/actionTypes";

interface IInitialState {
  modalType: string;
  currentContact: object;
  editedContact: object;
  loading: boolean;
  searchIsEmpty: boolean;
  filteredList: object[];
  contactList: object[];
}

const initialState: IInitialState = {
  modalType: null,
  currentContact: null,
  editedContact: {},
  loading: false,
  searchIsEmpty: true,
  filteredList: [],
  contactList: [
    {
      id: 111,
      name: "Michael",
      phone: "1231231",
      email: "qwerty@asd.com",
    },
    {
      id: 222,
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
    case SEARCH_IS_EMPTY_TOGGLE:
      return { ...state, searchIsEmpty: !action.toggle };
    case SET_FILTERED_LIST:
      return { ...state, filteredList: action.filteredList };
    case SET_NEW_CONTACT_LIST: {
      return {
        ...state,
        contactList: action.newContactList,
      };
    }
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
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        editedContact: {
          ...state.editedContact,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
}
