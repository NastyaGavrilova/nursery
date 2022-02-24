import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "./_bannerSwiper.scss";
import "./_bannerSwiperAdaptive.scss";

import plant1 from "../../assets/BannerSwiper/plan1.png";
import plant2 from "../../assets/BannerSwiper/plan2.png";
import plant3 from "../../assets/BannerSwiper/plan3.png";
import plant4 from "../../assets/BannerSwiper/plan4.png";

import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";

SwiperCore.use([Navigation]);

const BannerSwiper = () => {
  const slides = [];
  const images = [plant1, plant2, plant3, plant4];
  const title = [
    "Severin Candrian",
    "Bonsai Bot",
    "Severin Candrian",
    "Hybrid Caktus",
  ];
  const price = ["$59.99", "$59.99", "$19.99", "$25.99"];
  for (let i = 0; i < 4; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} className="c-banner__swiperSlide">
        <div className="c-banner__swiperSlide__wrapper">
          <div className="c-banner__swiperSlide__card">
            {/* <div className="c-banner__swiperSlide--left"> */}
            <img
              className="c-banner__swiperSlide--img"
              src={images[`${i}`]}
              alt="plant"
            ></img>
            {/* </div> */}
            <div className="c-banner__swiperSlide--right">
              <h5 className="c-banner__swiperSlide--title">{title[`${i}`]}</h5>
              <p className="c-banner__swiperSlide--text">
                Lorem Ipsum is simply dummy text.
              </p>
              <p className="c-banner__swiperSlide--price">{price[`${i}`]}</p>
              <button className="c-banner__swiperSlide--btn" id="js-add-btn1">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      modules={[Navigation]}
      // spaceBetween={30}
      slidesPerView={4}
      navigation={true}
      className="c-banner__swiper"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      loop={true}
      breakpoints={{
        600: {
          width: 600,
          slidesPerView: 1,
          loop: true,
        },
        800: {
          width: 800,
          slidesPerView: 2,
          loop: true,
          spaceBetween: 10,
        },
        1200: {
          width: 900,
          slidesPerView: 3,
          loop: true,
          spaceBetween: 15,
        },
        1500: {
          width: 1500,
          slidesPerView: 4,
          loop: true,
          spaceBetween: 30,
        },
      }}
    >
      {slides}
    </Swiper>
  );
};
export default BannerSwiper;
