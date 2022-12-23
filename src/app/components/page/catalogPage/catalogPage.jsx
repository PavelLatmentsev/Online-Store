import React, { useEffect, useState } from "react";
import styles from "./catalogPage.module.scss";
import HeaderMenu from "../../common/headerMenu";
import Footer from "../../common/footer";
import ProductCardsList from "../../common/goods/productCardList";
import API from "../../../api";
import Loader from "../../common/loader";

const CatalogPage = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        API.products.fetchAll().then((res) => {
            setIsLoading(true);
            setProducts(res);
            setIsLoading(false);
        });
    }, []);
    return (
        <div>
            <header>
                <HeaderMenu />
            </header>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {!isLoading ? (<div className={styles.catalog}>
                        <div><h1>Каталог</h1></div>
                        <div>
                            <ProductCardsList products={products} />
                        </div>
                    </div>) : <Loader />}

                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default CatalogPage;
