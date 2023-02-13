import React from "react";
import styles from "./catalogPage.module.scss";
import HeaderMenu from "../../common/headerMenu";
import Footer from "../../common/footer";

import Loader from "../../common/loader";
import CatalogList from "../../common/catalogList/catalogList";
import { useSelector } from "react-redux";
import { getCatalog } from "../../../store/catalog";
import { useProducts } from "../../../hooks/useProducts";
const CatalogPage = () => {
    const { isLoading } = useProducts();
    const catalogList = useSelector(getCatalog());
    return (
        <div>
            <header>
                <HeaderMenu />
            </header>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {!isLoading ? (<div className={styles.catalog}>
                        <div><h1 className={styles.catalog_title}>Каталог</h1></div>
                        <div>
                            <CatalogList catalogList={catalogList} />
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
