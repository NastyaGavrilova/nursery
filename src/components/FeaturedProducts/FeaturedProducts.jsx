import React from "react";
import FeaturedSwiper from "../FeaturedSwiper/FeaturedSwiper";
import "./_featuredProducts.scss";

const FeaturedProducts = () => {
  return (
    <>
      <div className="c-featured-products" id="products">
        <div className="c-featured-products__wrapper">
          <div className="c-featured-products__title">
            <h3 className="e-featured-products__title">Featured Products</h3>
            <h4 className="e-featured-products__subtitle">
              Smoothlu And healthy plant fore you and all people
            </h4>
          </div>
          <FeaturedSwiper />
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
