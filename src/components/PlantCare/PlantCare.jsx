import React from "react";
import "./_plantCare.scss";
import "./_plantCareAdaptive.scss";
import watering from "./watering.svg";
import light from "./light.svg";
import fertilizer from "./fertilizer.svg";

const PlantCare = () => {
  return (
    <>
      <div className="c-plant-care">
        <div className="c-plant-care__wrapper">
          <div className="c-plant-care__title">
            <h3 className="e-plant-care__title">Plant Care</h3>
            <h5 className="e-plant-care__subtitle">
              Smoothlu And healthy plant fore you and all people
            </h5>
          </div>
          <div className="c-plant-care__cards">
            <div className="c-plant-care__card">
              <div className="c-plant-care__card--left">
                <img
                  className="c-plant-care__img"
                  src={watering}
                  alt="watering icon"
                ></img>
              </div>
              <div className="c-plant-care__card--right">
                <h4 className="c-plant-care__card--title">Watering</h4>
                <p className="c-plant-care__card--text">
                  Free shipping around the world for all orders over $80
                </p>
              </div>
            </div>
            <div className="c-plant-care__card">
              <div className="c-plant-care__card--left">
                <img
                  className="c-plant-care__img"
                  src={light}
                  alt="watering icon"
                ></img>
              </div>
              <div className="c-plant-care__card--right">
                <h4 className="c-plant-care__card--title">Light</h4>
                <p className="c-plant-care__card--text">
                  Secure Payment services is a safer, faster, more secure way to
                  pay
                </p>
              </div>
            </div>
            <div className="c-plant-care__card">
              <div className="c-plant-care__card--left">
                <img
                  className="c-plant-care__img"
                  src={fertilizer}
                  alt="watering icon"
                ></img>
              </div>
              <div className="c-plant-care__card--right">
                <h4 className="c-plant-care__card--title">Fertilizer</h4>
                <p className="c-plant-care__card--text">
                  Eco-Friendly product keeps both Invironmental and human safe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantCare;
