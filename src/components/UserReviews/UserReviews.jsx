import React from "react";
import UserRevSwiper from "../UserRevSwiper/UserRevSwiper";
import "./_userReviews.scss";

const UserReviews = () => {
  return (
    <>
      <div className="c-user-reviews">
        <div className="c-user-reviews__wrapper">
          <div className="c-user-reviews__title">
            <h3 className="e-user-reviews__title">User Reviews</h3>
            <h4 className="e-user-reviews__subtitle">
              Smoothlu And healthy plant fore you and all people
            </h4>
          </div>
          <UserRevSwiper />
        </div>
      </div>
    </>
  );
};

export default UserReviews;
