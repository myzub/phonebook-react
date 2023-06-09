const origin = "http://localhost:8080";

async function _request(method, URL, body) {
  const requestBody = method === "GET" ? null : JSON.stringify(body);
  return fetch(URL, {
    method: method,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: requestBody,
  });
}

export async function getAllContacts() {
  return _request("GET", `${origin}/phonebook`, undefined);
}

export async function postNewContact(newContact) {
  return _request("POST", `${origin}/phonebook/`, newContact);
}

export async function deleteContact(contactId) {
  return _request("DELETE", `${origin}/phonebook/${contactId}`, undefined);
}

export async function putContact(contact) {
  return _request(
      "PUT",
      `${origin}/phonebook/${contact.id}`,
      contact
  );
}
