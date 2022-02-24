import React, { useState } from "react";
import "./_menu.scss";
import User from "./User.svg";
import ModalForm from "../ModalForm/ModalForm";

const Menu = ({ items, active, setActive }) => {
  const [modal, setModal] = useState({
    modal1: false,
    modal2: false,
  });
  return (
    <>
      <div
        className={active ? "menu active" : "menu"}
        // onClick={() => setActive(false)}
      >
        <div className="menu__content" onClick={(e) => e.stopPropagation()}>
          <div className="menu__header">
            <img
              className="menu__img--user"
              src={User}
              alt="user"
              onClick={() =>
                setModal({
                  ...modal,
                  modal1: true,
                })
              }
            ></img>
            <div className="сlose" onClick={() => setActive(false)}>
              ✕
            </div>
          </div>
          <ul className="menu__list">
            {items.map((item) => (
              <li className="menu__item" key={item.key}>
                <a className="menu__link" href={item.href}>
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
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
export default Menu;
