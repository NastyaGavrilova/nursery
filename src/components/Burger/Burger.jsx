import React, { useState } from "react";
import Menu from "../Menu/Menu";
import "./_burger.scss";

const Burger = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Home", href: "/", key: "key-1" },
    { value: "About Us", href: "#about", key: "key-2" },
    { value: "Products", href: "#products", key: "key-3" },
    { value: "Location", href: "#locaion", key: "key-4" },
    { value: "Contacts", href: "#contacts", key: "key-5" },
  ];
  return (
    <>
      <div className="c-burger">
        <div className="c-burger__nav">
          <div
            className="c-burger__btn"
            onClick={() => setMenuActive(!menuActive)}
          >
            <span className="c-burger__span" />
          </div>
        </div>
        <Menu active={menuActive} setActive={setMenuActive} items={items} />
      </div>
    </>
  );
};
export default Burger;
