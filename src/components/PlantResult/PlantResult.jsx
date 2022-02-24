import React from "react";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon4 from "./icon4.svg";
import "./_plantResult.scss";
import "./_plantResAdaptive.scss";

const PlantAchievements = () => {
  const title = [2000, 1000, 5000, 3000];
  const text = [
    "Total Service",
    "Home Delivary",
    "Happy Client",
    "Total Experts",
  ];
  const classes = [
    "c-card__img--first",
    "c-card__img--second",
    "c-card__img--third",
    "c-card__img--last",
  ];
  const images = [icon1, icon2, icon3, icon4];
  const achievements = [];
  for (let i = 0; i < 4; i += 1) {
    achievements.push(
      <div key={`achiewments-${i}`} className="c-plant-achievements__card">
        <div className="c-card">
          <div className="c-card__circle">
            <img
              className={classes[`${i}`]}
              src={images[`${i}`]}
              alt="icon"
            ></img>
          </div>
          <div className="c-card__wrapper">
            <h4 className="c-card__title">{title[`${i}`]}</h4>
            <p className="c-card__description">{text[`${i}`]}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="c-plant-achievements">
        <div className="c-plant-achievements__wrapper">{achievements}</div>
      </div>
    </>
  );
};
export default PlantAchievements;
