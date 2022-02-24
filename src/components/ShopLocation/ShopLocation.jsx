import React from "react";
import Location from "../../components/Location/Location";
import "./_shopLocation.scss";

const ShopLocation = () => {
  return (
    <>
      <div className="c-shop-location" id="location">
        <div className="c-shop-location__wrapper">
          <div className="c-shop-location__title">
            <h3 className="e-shop-location__title">Our Location</h3>
            <h4 className="e-shop-location__subtitle">
              Smoothlu And healthy plant fore you and all people
            </h4>
          </div>
          <Location
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCMODx4vxAvaNvboDBi4f66uA5OEJleHtU&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          ></Location>
        </div>
      </div>
    </>
  );
};
export default ShopLocation;
