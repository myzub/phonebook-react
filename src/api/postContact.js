import { postNewContact } from "./api";
import fetchContactList from "./fetchContactList";
import { toggleLoader } from "../store/actions/phonebook";

export default async function postContact(newContact) {
  try {
    toggleLoader(true);
    await postNewContact(newContact);
    console.log(`Contact ${newContact.name} is posted successfully!`);
    await fetchContactList();
    toggleLoader(false);
  } catch (e) {
    toggleLoader(true);
    console.log(new Error(`"Error posting new Contact! \n ${e}`));
  }
}
