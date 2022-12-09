import React from "react";
import HeaderMenu from "../../ui/headerMenu";
import SliderList from "../../ui/sliderList";
import BestList from "../../ui/bestList";
import Catalog from "../../ui/catalog";
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
      </main>
    </div>
  );
};

export default MainPage;
