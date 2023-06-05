import {
  CLOSE_MODAL,
  SET_NEW_CONTACT_LIST,
  UPDATE_INPUT_VALUE,
} from "../actions/actionTypes";

const initialState = {
  modalType: null,
  currentContact: null,
  editedContact: null,
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case CLOSE_MODAL:
      return {
        ...state,
        modalType: null,
        currentContact: null,
        editedContact: {},
      };
    case SET_NEW_CONTACT_LIST: {
      return {
        ...state,
        contactList: action.newContactList,
      };
    }
    case UPDATE_INPUT_VALUE:
      console.log(
        `editedContact - ${JSON.stringify(state.editedContact)} | \n
        name - ${action.name} | value - ${action.value}`
      );
      return {
        ...state,
        // editedContact
      };
    default:
      return state;
  }
}
