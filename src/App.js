import "./App.css";
import Button from "./Components/Button/Button";
import Field from "./Components/Field/Field";
import Icon from "./Components/Icon/Icon";
import Loader from "./Components/Loader/Loader";
import Modal from "./Components/Modal/Modal";
import PhonebookList from "./Components/PhonebookList/PhonebookList";
import PhonebookItem from "./Components/PhonebookList/PhonebookItem/PhonebookItem";

function App() {
  return (
    <div className="App">
      <Button />
      <Field />
      <Icon />
      <Loader />
      <Modal />
      <PhonebookList />
      <PhonebookItem />
    </div>
  );
}

export default App;
