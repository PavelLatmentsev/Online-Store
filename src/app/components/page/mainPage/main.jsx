import React from "react";
import HeaderMenu from "../../ui/headerMenu";
import SliderList from "../../ui/sliderList";
import BestList from "../../ui/bestList";
import Catalog from "../../ui/catalog";
import AdvertisingBlock from "../../ui/advertisingBlock";

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
      </main>
    </div>
  );
};

export default MainPage;
