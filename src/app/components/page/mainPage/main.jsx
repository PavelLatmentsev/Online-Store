import React from "react";
import HeaderMenu from "../../common/headerMenu";
import SliderList from "../../ui/sliderList";
import BestList from "../../ui/bestList";
import Catalog from "../../ui/catalog";
import AdvertisingBlock from "../../ui/advertisingBlock";
import SliderBrands from "../../ui/sliderBrands";
import AboutShop from "../../ui/aboutShop";
import ReviewsList from "../../common/reviews/reviewsList";
import SubscriptionBlock from "../../ui/subscriptionBlock";
import Footer from "../../common/footer";
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
        <SubscriptionBlock />

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainPage;
