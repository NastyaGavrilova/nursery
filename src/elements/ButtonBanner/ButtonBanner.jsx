import React from "react";
import "./_buttonBanner.scss";

const ButtonBunner = () => {
  return (
    <>
      <div className="e-button__banner">
        <button className="e-button__banner-add button-slanted">
          <span className="e-button__banner-add-text">Add To Cart</span>
        </button>
        <button className="e-button__banner-learn">
          <span className="e-button__banner-learn-text">Learn More</span>
        </button>
      </div>
    </>
  );
};

export default ButtonBunner;
