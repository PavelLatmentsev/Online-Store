import React from "react";
import HeaderMenu from "../../ui/headerMenu";
import SliderList from "../../ui/sliderList";
import BestList from "../../ui/bestList";
import Catalog from "../../ui/catalog";
import AdvertisingBlock from "../../ui/advertisingBlock";
import SliderBrands from "../../ui/sliderBrands";
import AboutShop from "../../ui/aboutShop";
import ReviewsList from "../../common/reviews/reviewsList";
const MainPage = () => {
  return (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <main>
        <SliderList />
        <BestList />
        <Catalog />
        <AdvertisingBlock />
        <SliderBrands />
        <AboutShop />
        <ReviewsList />
      </main>
    </div>
  );
};

export default MainPage;
