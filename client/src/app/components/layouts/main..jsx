import React from "react";
import HeaderMenu from "../common/headerMenu";
import Footer from "../ui/footer";
import { useLocation } from "react-router-dom";
import ProductCardsList from "../common/goods/productCardList";
import MainPage from "../page/mainPage/main";
const MainLayout = () => {
    const { pathname } = useLocation();

    return (<div>
        <header>
            <HeaderMenu />
        </header>
        <main>
            {pathname === "/promocodes" ? <ProductCardsList /> : <MainPage />

            }
        </main>
        <footer>
            <Footer />
        </footer>
    </div>);
};

export default MainLayout;
