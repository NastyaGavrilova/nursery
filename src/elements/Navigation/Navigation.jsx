import React from "react";
import "./_navigation.scss";

const Navigation = () => {
  const links = ["/", "#about", "#products", "#location", "#contacts"];
  const textLink = ["Home", "About Us", "Products", "Location", "Contacts"];
  const lists = [];
  for (let i = 0; i < 5; i += 1) {
    lists.push(
      <li key={`li-${i}`} className="c-navigation__item ">
        <a className="c-navigation__item--link" href={links[`${i}`]}>
          {textLink[`${i}`]}
        </a>
      </li>
    );
  }
  return (
    <>
      <div className="c-navigation">
        <div className="c-navigation__wrapper">
          <ul className="c-navigation__items">{lists}</ul>
        </div>
      </div>
    </>
  );
};
export default Navigation;
