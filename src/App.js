import "./App.css";

import Layout from "./hoc/Layout";
import Phonebook from "./Containers/Phonebook";

function App() {
  return (
    <Layout>
      <Phonebook />
    </Layout>
  );
}

export default App;
