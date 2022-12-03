import React from "react";
import HeaderMenu from "../../ui/headerMenu";
import SliderList from "../../ui/sliderList";
const MainPage = () => {
  return (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <main>
        <SliderList />
      </main>
    </div>
  );
};

export default MainPage;
