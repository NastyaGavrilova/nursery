import React from "react";
import delivery from "./delivery.svg";
import payment from "./payment.svg";
import eco from "./eco.svg";
import "./_benefits.scss";

const Benefits = () => {
  return (
    <>
      <div className="c-benefits">
        <div className="c-benefits__wrapper">
          <div className="c-benefits__item">
            <div className="c-benefits__left">
              <img
                className="c-benefits__icon--left"
                src={delivery}
                alt="delivery-icon"
              ></img>
            </div>
            <div className="c-benefits__right">
              <h4 className="c-benefits__title">Free Delivery</h4>
              <p className="c-benefits__description">Free shipping the world</p>
            </div>
          </div>
          <div className="c-benefits__item">
            <div className="c-benefits__left">
              <img
                className="c-benefits__icon--center"
                src={payment}
                alt="delivery-icon"
              ></img>
            </div>
            <div className="c-benefits__right">
              <h4 className="c-benefits__title">Secure Payment</h4>
              <p className="c-benefits__description">
                Secure Payment services is safer
              </p>
            </div>
          </div>
          <div className="c-benefits__item">
            <div className="c-benefits__left">
              <img
                className="c-benefits__icon--right"
                src={eco}
                alt="delivery-icon"
              ></img>
            </div>
            <div className="c-benefits__right">
              <h4 className="c-benefits__title">Eco Friendly</h4>
              <p className="c-benefits__description">
                Eco-Friendly product keeps
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
