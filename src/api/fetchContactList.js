import { getAllContacts } from "./api";
import { setNewContactList, toggleLoader } from "../store/actions/phonebook";

export default function fetchContactList() {
  return async (dispatch) => {
    try {
      dispatch(toggleLoader(true));
      const response = await getAllContacts();
      const contacts = await response.json();
      dispatch(setNewContactList(contacts.data));
      dispatch(toggleLoader(false));
    } catch (e) {
      dispatch(toggleLoader(true));
      console.log(`Error fetching Contact List! \n exception: ${e}`);
    }
  };
}
