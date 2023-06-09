import fetchContactList from "./fetchContactList";
import { deleteContact } from "./api";
import { toggleLoader } from "../store/actions/phonebook";

export default async function deleteContactById(contactId) {
  try {
    toggleLoader(true);
    await deleteContact(contactId);
    console.log(`Contact ${contactId} is deleted successfully!`);
    await fetchContactList();
    toggleLoader(false);
  } catch (e) {
    toggleLoader(true);
    console.log(new Error(`Error deleting new Contact! \n ${e}`));
  }
}
