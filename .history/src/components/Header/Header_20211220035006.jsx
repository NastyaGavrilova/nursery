import React, { useState } from "react";
import logo from "./logo.svg";
import logoText from "./logo-text.svg";
import "./_header.scss";
import "./_headerAdaptive.scss";
import Navigation from "../../elements/Navigation/Navigation";
import Burger from "../../components/Burger/Burger";

import shopIcon from "./Shop.svg";
import userIcon from "./User.svg";
import ModalForm from "../ModalForm/ModalForm";
import ModalCart from "../ModalCart/ModalCart";
// import { BrowserRouter } from "react-router-dom";

const Header = () => {
  const [modal, setModal] = useState({
    modal1: false,
    modal2: false,
  });
  const [modalCart, setModalCart] = useState({
    modalcart: false,
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
            <div className="c-header__icon">
              <img
                className="c-header__icon-shop"
                src={shopIcon}
                alt="icon-shop"
                onClick={() =>
                  setModalCart({
                    ...modalCart,
                    modalcart: true,
                  })
                }
              ></img>
            </div>
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
      <ModalCart
        isOpenedCart={modalCart.modalcart}
        onModalCloseCart={() =>
          setModalCart({ ...modalCart, modalcart: false })
        }
      />
    </>
  );
};

export default Header;
