import React from "react";
import HeaderMenu from "../common/headerMenu";
import Footer from "../ui/footer";
import { useLocation, useParams } from "react-router-dom";
import ProductCardsList from "../common/goods/productCardList";
import MainPage from "../page/mainPage/main";
const MainLayout = () => {
    const Params = useParams();
    const { pathname } = useLocation();
    console.log(Params);
    console.log(pathname);
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
