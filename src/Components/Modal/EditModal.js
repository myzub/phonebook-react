import classes from "./Modal.module.css";
import closeIcon from "../../img/close.png";
import {
  closeModal,
  modalSubmitHandler,
  updateContact,
} from "../../store/actions/phonebook";
import { useDispatch, useSelector } from "react-redux";

const EditModal = () => {
  const {
    name,
    phone,
    email,
    closeModalDispatch,
    modalSubmitHandlerDispatch,
    updateContactDispatch,
  } = useEditModal();

  return (
    <div className={classes.Modal}>
      <div className={classes.headerWrapper}>
        <h3>Edit {name}?</h3>
        <img src={closeIcon} alt="close" onClick={closeModalDispatch} />
      </div>
      <form>
        <div className={classes.inputWrapper}>
          <span>Name</span>
          <input
            name={"name"}
            type="text"
            defaultValue={name}
            onChange={(event) =>
              updateContactDispatch(event.target.name, event.target.value)
            }
          />
          <span>Phone</span>
          <input
            name={"phone"}
            type="text"
            defaultValue={phone}
            onChange={(event) =>
              updateContactDispatch(event.target.name, event.target.value)
            }
          />
          <span>Email</span>
          <input
            type="text"
            name={"email"}
            defaultValue={email}
            onChange={(event) =>
              updateContactDispatch(event.target.name, event.target.value)
            }
            autoComplete="off"
          />
        </div>
        <div className={classes.buttonWrapper}>
          <button
            className={classes.submitButton}
            onClick={() => {
              modalSubmitHandlerDispatch();
              closeModalDispatch();
            }}
          >
            OK
          </button>
          <button className={classes.cancelButton} onClick={closeModalDispatch}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

function useEditModal() {
  const currentContact = useSelector((state) => state.phonebook.currentContact);
  const { name, phone, email } = currentContact;

  const dispatch = useDispatch();
  const closeModalDispatch = () => dispatch(closeModal());
  const modalSubmitHandlerDispatch = () => dispatch(modalSubmitHandler());
  const updateContactDispatch = (name, value) =>
    dispatch(updateContact(name, value));

  return {
    name,
    phone,
    email,
    closeModalDispatch,
    modalSubmitHandlerDispatch,
    updateContactDispatch,
  };
}

export default EditModal;
