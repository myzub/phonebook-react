import classes from "./Modal.module.css";
import closeIcon from "../../img/close.png";
import React, { useRef, useState } from "react";
import { closeModal, modalSubmitHandler } from "../../store/actions/phonebook";
import { useDispatch, useSelector } from "react-redux";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const DeleteModal = () => {
  const { name, closeModalDispatch, modalSubmitHandlerDispatch } =
    useDeleteModal();

  const ref = useRef();
  const [showModal, setShowModal] = useState(false);
  useOnClickOutside(ref, () => setShowModal(false));

  return (
    <div className={classes.modalBackdrop} ref={ref}>
      <div className={classes.Modal}>
        <div className={classes.headerWrapper}>
          <h3>Delete {name}?</h3>
          <img src={closeIcon} alt="close" onClick={closeModalDispatch} />
        </div>
        <div className={classes.marginDiv}></div>
        <div className={classes.buttonWrapper}>
          <button
            onClick={modalSubmitHandlerDispatch}
            className={classes.submitButton}
          >
            OK
          </button>
          <button className={classes.cancelButton} onClick={closeModalDispatch}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

function useDeleteModal() {
  const currentContact = useSelector((state) => state.phonebook.currentContact);
  const name = currentContact.name;

  const dispatch = useDispatch();
  const closeModalDispatch = () => dispatch(closeModal());
  const modalSubmitHandlerDispatch = () => dispatch(modalSubmitHandler());

  return { name, closeModalDispatch, modalSubmitHandlerDispatch };
}

export default DeleteModal;
