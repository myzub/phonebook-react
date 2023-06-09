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
