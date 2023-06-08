import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { closeModal } from "../../store/actions/phonebook";


const Modal = () => {
  const selectModal = useModal();

  return ReactDOM.createPortal(
    <>{selectModal()}</>,
    document.getElementById("modal-root")
  );
};

function useModal() {
  const modalType = useSelector((state) => state.phonebook.modalType);
  const dispatch = useDispatch();
  const closeModalDispatch = () => dispatch(closeModal());

  const escCloseModal = (event) => {
    if (event.key === "Escape") {
      closeModalDispatch();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escCloseModal, false);
    return () => {
      document.removeEventListener("keydown", escCloseModal, false);
    };
  }, [modalType]);

  return () => {
    if (modalType === "EDIT") {
      return <EditModal />;
    } else if (modalType === "DELETE") {
      return <DeleteModal />;
    } else {
      return null;
    }
  };
}

export default Modal;
