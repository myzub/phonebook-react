import "./App.css";

import Layout from "./hoc/Layout";
import Phonebook from "./Containers/Phonebook";
import Modal from "./Components/Modal/Modal";

function App() {
  return (
    <Layout>
      <Phonebook />
      <Modal />
    </Layout>
  );
}

export default App;
