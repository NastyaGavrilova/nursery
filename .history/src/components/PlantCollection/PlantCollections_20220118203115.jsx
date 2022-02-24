import React from "react";
import Benefits from "../Benefits/Benefits";
import "./_plantCollections.scss";
import "./_plantCollAdaptive.scss";
import peace from "../../assets/PlantCollections/";
import suculent from "./succulent-plant.png";
import colorFlowers from "./colour-flowers.png";
import galina from "./galina.png";
import annie from "./annie-spratt.png";
import goldenPothos from "./golden-pothos.png";
import natalia from "./natalia.png";

const PlantCollection = () => {
  return (
    <>
      <div className="c-plant-collection" id="about">
        <div className="c-plant-collection__wrapper">
          <Benefits />
          <h3 className="c-plant-collection__title">Plant Collection</h3>
          <h5 className="c-plant-collection__subtitle">
            Smoothlu And healthy plant fore you and all people
          </h5>
          <div className="c-plant-collection__gallery">
            <div className="c-column-left">
              <div className="c-column-left__top">
                <img
                  className="c-column-left__img"
                  src={peace}
                  alt="peace-plant"
                ></img>
                <div className="c-column-left__decription">
                  <p className="c-column-left__text--left">Pet Friendly</p>
                  <p className="c-column-left__text--right">16 Items</p>
                </div>
              </div>
              <div className="c-column-left__bottom">
                <img
                  className="c-column-left__bottom-img"
                  src={suculent}
                  alt="succulent"
                ></img>
                <div className="c-column-left__bottom-description">
                  <p className="c-column-left__bottom-text--left">Indoor</p>
                  <p className="c-column-left__bottom-text--right">25 Items</p>
                </div>
              </div>
            </div>
            <div className="c-column-center">
              <div className="c-column-center__top">
                <img
                  className="c-column-center__top-img"
                  src={colorFlowers}
                  alt="colour flowers"
                ></img>
                <div className="c-column-center__top-description">
                  <p className="c-column-center__top-text--left">Outdoor</p>
                  <p className="c-column-center__top-text--right">30 Items</p>
                </div>
              </div>
              <div className="c-column-center__middle">
                <img
                  className="c-column-center__middle-img"
                  src={galina}
                  alt="galina flowers"
                ></img>
                <div className="c-column-center__middle-description">
                  <p className="c-column-center__middle-text--left">
                    Pet Friendly
                  </p>
                  <p className="c-column-center__middle-text--right">
                    29 Items
                  </p>
                </div>
              </div>
              <div className="c-column-center__bottom">
                <img
                  className="c-column-center__bottom-img"
                  src={annie}
                  alt="annie spratt flowers"
                ></img>
                <div className="c-column-center__bottom-description">
                  <p className="c-column-center__bottom-text--left">Indoor</p>
                  <p className="c-column-center__bottom-text--right">
                    29 Items
                  </p>
                </div>
              </div>
            </div>
            <div className="c-column-right">
              <div className="c-column-right__top">
                <img
                  className="c-column-right__top-img"
                  src={goldenPothos}
                  alt="golden pothos plant"
                ></img>
                <div className="c-column-right__top-description">
                  <p className="c-column-right__top-text--left">Outdoor</p>
                  <p className="c-column-right__top-text--right">18 Items</p>
                </div>
              </div>
              <div className="c-column-right__bottom">
                <img
                  className="c-column-right__bottom-img"
                  src={natalia}
                  alt="natalia plant"
                ></img>
                <div className="c-column-right__bottom-description">
                  <p className="c-column-right__bottom-text--left">Outdoor</p>
                  <p className="c-column-right__bottom-text--right">18 Items</p>
                </div>
              </div>
            </div>
          </div>
          <div className="c-plant-collection__view-all">
            <button className="c-plant-collection__button">
              <span className="c-plant-collection__button--text">View All</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PlantCollection;
