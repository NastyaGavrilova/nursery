import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
import "./_userRevSwiper.scss";
import "./_userRevSwipAdaptive.scss";

import user1 from "./user1.png";
import user2 from "./user2.png";
import user3 from "./user3.png";
import user4 from "./user4.png";
import user5 from "./user5.png";
SwiperCore.use([Pagination]);

const UserRevSwiper = () => {
  const images = [user1, user2, user3, user4, user5];
  const name = [
    "Mclovin Kenny",
    "Gandalf Hodo",
    "William Thomas",
    "Dillan Obrayan",
    "Chrisrian Horveg",
  ];
  const position = [
    "Founder, Zilapy LTD",
    "President & CEO, atica",
    "Creative Director, Willo",
    "Creative Director, CREY",
    "Founder, Corn LTD",
  ];
  const review = [
    "Class aptent taciti sociosqu ad litora torquent conubia nostra, per inceptos himenaeos. Fusce erat, placerat euismod vitae, euismod quis elit. ",
    "Class aptent taciti sociosqu ad litora torquent conubia nostra, per inceptos himenaeos. Fusce erat, placerat euismod vitae, euismod quis elit. ",
    "Class aptent taciti sociosqu ad litora torquent conubia nostra, per inceptos himenaeos. Fusce erat, placerat euismod vitae, euismod quis elit. ",
    "Class aptent taciti sociosqu ad litora torquent conubia nostra, per inceptos himenaeos. Fusce erat, placerat euismod vitae, euismod quis elit. ",
    "Class aptent taciti sociosqu ad litora torquent conubia nostra, per inceptos himenaeos. Fusce erat, placerat euismod vitae, euismod quis elit. ",
  ];
  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide
        key={`rev-slide-${i}`}
        tag="div"
        className="c-user-swiper-slide"
      >
        <img
          className="c-user-swiper-slide__img"
          src={images[`${i}`]}
          alt="user-imag"
        ></img>

        <div className="c-user-swiper-slide__wrapper">
          <h4 className="c-user-swiper-slide__title">{name[`${i}`]}</h4>
          <p className="c-user-swiper-slide__position">{position[`${i}`]}</p>
          <p className="c-user-swiper-slide__review">{review[`${i}`]}</p>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <>
      <div className="c-user-rev-swiper">
        <div className="c-user-rev-swiper__wrapper">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            className="c-user-swiper"
            onSlideChange={() => console.log("featured slide change")}
            loop={true}
            pagination={{ clickable: true }}
            centeredSlides={true}
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
                width: 1200,
                slidesPerView: 2,
                loop: true,
                spaceBetween: 20,
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
        </div>
      </div>
    </>
  );
};

export default UserRevSwiper;
