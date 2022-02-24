import React from "react";
import logo from "./logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./_preFooter.scss";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// library.add(fab);
const PreFooter = () => {
  const icons = [faFacebookF, faTwitter, faYoutube, faInstagram, faGoogle];
  const fontAwesomeTag = [];
  const links = ["Home", "About Us", "Products", "Location"];
  const list = [];
  const contacts = [];
  const contactsRef = [
    "hello@nursery.io",
    "2563 High street",
    "Los Angles, California",
  ];
  const iconClasses = [
    "c-preFooter__icon facebook",
    "c-preFooter__icon twitter",
    "c-preFooter__icon youtube",
    "c-preFooter__icon inst",
    "c-preFooter__icon google",
  ];
  const href = ["/", "#about", "#products", "#location"];
  const hrefSocials = [
    "https://uk-ua.facebook.com/",
    "https://twitter.com/?lang=ru",
    "https://www.youtube.com/",
    "https://www.instagram.com/",
    "https://www.google.com.ua/?hl=ru",
  ];
  for (let i = 0; i < 3; i += 1) {
    contacts.push(
      <li key={`contacts-${i}`} className="c-preFooter__contacts--item">
        {contactsRef[`${i}`]}
      </li>
    );
  }
  for (let i = 0; i < 4; i += 1) {
    list.push(
      <li key={`links-${i}`} className="c-preFooter__text">
        <a href={href[`${i}`]}>{links[`${i}`]}</a>
      </li>
    );
  }
  for (let i = 0; i < 5; i += 1) {
    fontAwesomeTag.push(
      <div key={`icons-${i}`} className={iconClasses[`${i}`]}>
        <a href={hrefSocials[`${i}`]}>
          <FontAwesomeIcon icon={icons[`${i}`]}></FontAwesomeIcon>
        </a>
      </div>
    );
  }
  return (
    <>
      <div className="c-preFooter" id="contacts">
        <div className="c-preFooter__wrapper">
          <div className="c-preFooter__left-block">
            <div className="c-preFooter__logo">
              <img
                className="c-preFooter__logo-img"
                src={logo}
                alt="logo"
              ></img>
              <h4 className="c-preFooter__logo-text">Landix</h4>
            </div>
            <p className="c-preFooter__description">
              Sed perspiciatis unde omnis natus error voluptatem accusantium
              doloremque laudantium, totam rem aperiam.
            </p>
            <div className="c-preFooter__socials">{fontAwesomeTag}</div>
          </div>
          <div className="c-preFooter__center-block">
            <h4 className="c-preFooter__title">Quick Link</h4>
            <ul className="c-preFooter__links">{list}</ul>
          </div>
          <div className="c-preFooter__right-block">
            <h4 className="c-preFooter__title">Contact Us</h4>
            <ul className="c-preFooter__contacts">{contacts}</ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PreFooter;
