import React from "react";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import "./_modalForm.scss";

const ModalForm = (props) => {
  return (
    <div className={`modal__wrapper ${props.isOpened ? "open" : "close"}`}>
      <div className="modal__body">
        <div className="modal__close" onClick={props.onModalClose}>
          ✕
        </div>
        <div className="modal__forms">
          <div className="modal__authorization">
            <AuthorizationForm />
          </div>
          <div className="c-modal__registration">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
