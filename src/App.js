import React from "react";
import Banner from "./components/Banner/Banner";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import PreFooter from "./components/Footer/PreFooter";
import Header from "./components/Header/Header";
import PlantCare from "./components/PlantCare/PlantCare";
import PlantCollection from "./components/PlantCollection/PlantCollections";
import ShopLocation from "./components/ShopLocation/ShopLocation";
import UserReviews from "./components/UserReviews/UserReviews";

import "./index.scss";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <PlantCollection />
      <PlantCare />
      <FeaturedProducts />
      <UserReviews />
      <ShopLocation />
      <PreFooter />
    </div>
  );
}

export default App;
