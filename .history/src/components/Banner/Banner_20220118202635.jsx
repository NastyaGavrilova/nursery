import React from "react";
import ButtonBunner from "../../elements/ButtonBanner/ButtonBanner";
import TitleBanner from "../../elements/TitleBanner/Title";
import BannerSwiper from "../BannerSwiper/BannerSwiper";
import "./_banner.scss";
import "./_banerAdaptive.scss";
import bannerImage from "../../assets/Banner/banner.png";
import Leaf from "../../assets/Banner/leaf.svg";
import Plant from "../../assets/Banner/plant.svg";
import Flowerpot from "../../assets/Banner/Flowerpot.svg";

const Banner = () => {
  return (
    <>
      <div className="c-banner">
        <div className="c-banner__wrapper">
          <div className="c-banner__left">
            <div className="c-banner__title">
              <TitleBanner />
            </div>
            <div className="c-banner__buttons">
              <ButtonBunner />
            </div>
          </div>
          <div className="c-banner__right">
            <div className="c-banner__right--circle">
              <img
                className="c-banner__right--img"
                src={bannerImage}
                alt="banner"
              ></img>
            </div>
            <div className="c-banner__right--icon1">
              <img
                className="c-banner__right--img1"
                src={Leaf}
                alt="leaf"
              ></img>
            </div>
            <div className="c-banner__right--icon2">
              <img
                className="c-banner__right--img2"
                src={Plant}
                alt="plant"
              ></img>
            </div>
            <div className="c-banner__right--icon3">
              <img
                className="c-banner__right--img3"
                src={Flowerpot}
                alt="flowerpot"
              ></img>
            </div>
          </div>
        </div>
        <BannerSwiper />
      </div>
    </>
  );
};

export default Banner;
