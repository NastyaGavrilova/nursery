import React, { useState } from "react";
import "./_header.scss";
import "./_headerAdaptive.scss";
import Burger from "../../components/Burger/Burger";
import Navigation from "../../elements/Navigation/Navigation";
import ModalForm from "../ModalForm/ModalForm";
import logoText from "../../assets/Header/logo-text.svg";
import logo from "../../assets/Header/logo.svg";
import userIcon from "../../assets/Header/User.svg";
// import { BrowserRouter } from "react-router-dom";

const Header = () => {
  const [modal, setModal] = useState({
    modal1: false,
    modal2: false,
  });
  return (
    <>
      <div className="c-header">
        <div className="c-header__wrapper">
          <div className="c-header__logo">
            <img src={logo} alt="logo" className="c-header__logo-img"></img>
            <img
              className="c-header__logo-text"
              src={logoText}
              alt="logo-text"
            ></img>
          </div>

          <Navigation />

          <Burger />

          <div className="c-header__icons">
            <div className="c-header__icon"></div>
            <div className="c-header__icon">
              <img
                className="c-header__icon-user"
                src={userIcon}
                alt="icon-user"
                onClick={() =>
                  setModal({
                    ...modal,
                    modal1: true,
                  })
                }
              ></img>
            </div>
          </div>
        </div>
      </div>
      <ModalForm
        isOpened={modal.modal1}
        onModalClose={() => setModal({ ...modal, modal1: false })}
      ></ModalForm>
      <ModalForm
        isOpened={modal.modal2}
        onModalClose={() => setModal({ ...modal, modal2: false })}
      ></ModalForm>
    </>
  );
};

export default Header;
