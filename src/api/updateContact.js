import { putContact } from "./api";
import fetchContactList from "./fetchContactList";
import { toggleLoader } from "../store/actions/phonebook";

export async function updateContactData(contact) {
  try {
    toggleLoader(true);
    await putContact(contact);
    console.log(`Contact ${contact.id} is updated successfully!`);
    await fetchContactList();
    toggleLoader(false);
  } catch (e) {
    toggleLoader(true);
    console.log(new Error(`"Error deleting new Contact! \n ${e}`));
  }
}
