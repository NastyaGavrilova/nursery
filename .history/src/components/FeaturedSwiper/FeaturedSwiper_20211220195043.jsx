import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

// import SwiperCore, { Pagination, Controller } from "swiper";
import SwiperCore, { Pagination, Controller } from "swiper";
import stephanie from "./stephanie-harvey.png";
import swiss from "./swiss-cheese-plant.png";
import paper from "./pepper-face-plant.png";
import monstera from "./monstera-deliciosa-plant.png";
import harvey from "./stephanie-harvey1.png";
import linh from "./linh-le.png";
import galina from "./galina2.png";
import harvey2 from "./stephanie-harvey2.png";
import "swiper/components/controller/controller.scss";
import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
import "./_featuredSwiper.scss";
// import testUtils from "react-dom/test-utils";
SwiperCore.use([Pagination]);
SwiperCore.use([Controller]);

const FeaturedSwiper = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const slides = [];
  const secondSlides = [];
  const images = [stephanie, swiss, paper, monstera];
  const secImages = [harvey, linh, galina, harvey2];
  const classes = [
    "c-swiper-slide__top",
    "c-swiper-slide__top--next",
    "c-swiper-slide__top--prelast",
    "c-swiper-slide__top--last",
  ];
  const secClassess = [
    "c-swiper-slide__top--first",
    "c-swiper-slide__top--sec",
    "c-swiper-slide__top--third",
    "c-swiper-slide__top--fourth",
  ];
  for (let i = 0; i < 4; i += 1) {
    slides.push(
      <SwiperSlide
        key={`featured-slide-${i}`}
        tag="div"
        className="c-swiper-slide"
      >
        <div className="c-swiper-slide__wrapper">
          <div className={classes[`${i}`]}>
            <img
              className="c-swiper-slide__img"
              src={images[`${i}`]}
              alt="stephanie"
            ></img>
          </div>
          <div className="c-swiper-slide__bottom">
            <div className="c-swiper-slide__left">
              <h5 className="c-swiper-slide__title">Combo Nisi</h5>
              <button className="c-swiper-slide__btn">
                <span className="c-swiper-slide__btn-text">Add to Cart</span>
              </button>
            </div>
            <div className="c-swiper-slide__right">
              <p className="c-swiper-slide__price">$79.99</p>
              <div className="c-swiper-slide__stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  }
  for (let i = 0; i < 4; i += 1) {
    secondSlides.push(
      <SwiperSlide key={`featured-slide-sec-${i}`} className="c-swiper-slide">
        <div className="c-swiper-slide__wrapper">
          <div className={secClassess[`${i}`]}>
            <img
              className="c-swiper-slide__img"
              src={secImages[`${i}`]}
              alt="stephanie"
            ></img>
          </div>
          <div className="c-swiper-slide__bottom">
            <div className="c-swiper-slide__left">
              <h5 className="c-swiper-slide__title">Combo Nisi</h5>
              <button className="c-swiper-slide__btn">
                <span className="c-swiper-slide__btn-text">Add to Cart</span>
              </button>
            </div>
            <div className="c-swiper-slide__right">
              <p className="c-swiper-slide__price">$79.99</p>
              <div className="c-swiper-slide__stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  }
  return (
    <>
      <div className=" c-featured-swiper">
        <div className="c-featured-swiper__wrapper">
          <Swiper
            modules={[Pagination]}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            // spaceBetween={30}
            slidesPerView={4}
            className="c-swiper"
            loop={true}
            onSlideChange={() => console.log("featured slide change")}
            // loop={true}
            // breakpoints={{
            //   600: {
            //     width: 600,
            //     slidesPerView: 1,
            //     loop: true,
            //   },
            //   800: {
            //     width: 800,
            //     slidesPerView: 2,
            //     loop: true,
            //     spaceBetween: 10,
            //   },
            //   1200: {
            //     width: 1200,
            //     slidesPerView: 2,
            //     loop: true,
            //     spaceBetween: 20,
            //   },
            //   1500: {
            //     width: 1500,
            //     slidesPerView: 4,
            //     loop: true,
            //     spaceBetween: 30,
            //   },
            // }}
          >
            {slides}
          </Swiper>
          <Swiper
            modules={[Pagination]}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
            // spaceBetween={30}
            slidesPerView={4}
            loop={true}
            pagination={{ clickable: true }}
            className="c-swiper"
            onSlideChange={() => console.log("featured slide change")}
            // loop={true}

            // breakpoints={{
            //   600: {
            //     width: 600,
            //     slidesPerView: 1,
            //     loop: true,
            //   },
            //   800: {
            //     width: 800,
            //     slidesPerView: 2,
            //     loop: true,
            //     spaceBetween: 10,
            //   },
            //   1200: {
            //     width: 1200,
            //     slidesPerView: 3,
            //     loop: true,
            //     spaceBetween: 20,
            //   },
            //   1500: {
            //     width: 1500,
            //     slidesPerView: 4,
            //     loop: true,
            //     spaceBetween: 30,
            //   },
            // }}
          >
            {secondSlides}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeaturedSwiper;
