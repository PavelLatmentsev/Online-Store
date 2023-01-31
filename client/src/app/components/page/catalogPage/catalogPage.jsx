import React, { useState } from "react";
import styles from "./catalogPage.module.scss";
import HeaderMenu from "../../common/headerMenu";
import Footer from "../../common/footer";
import ProductCardsList from "../../common/goods/productCardList";
import Loader from "../../common/loader";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import CatalogList from "../../common/catalogList/catalogList";
import { useSelector } from "react-redux";
import { getCatalog } from "../../../store/catalog";
import { useProducts } from "../../../hooks/useProducts";
const CatalogPage = () => {
    const { products, count, isLoading } = useProducts();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12;
    const lastPage = Math.ceil(count / pageSize);
    const catalogList = useSelector(getCatalog());

    const heandlerStartPaginationChange = () => {
        setCurrentPage(1);
    };
    const heandlerEndPaginationChange = () => {
        setCurrentPage(lastPage);
    };
    const heandlerPrevPaginationChange = () => {
        if (currentPage === 1) {
            setCurrentPage(lastPage);
        } else {
            setCurrentPage(prevState => prevState - 1);
        }
    };
    const heandlerNextPaginationChange = () => {
        if (currentPage === lastPage) {
            setCurrentPage(1);
        } else {
            setCurrentPage(prevState => prevState + 1);
        }
    };

    const heandlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(products, currentPage, pageSize);
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
                        <div>
                            <ProductCardsList products={userCrop} />

                            <div className={styles.catalog_pagination}>

                                <Pagination
                                    onPageChange={heandlePageChange}
                                    pageSize={pageSize}
                                    itemCount={count}
                                    currentPage={currentPage}
                                    onPrevChange={heandlerPrevPaginationChange}
                                    onNextChange={heandlerNextPaginationChange}
                                    onStartChange={heandlerStartPaginationChange}
                                    onEndChange={heandlerEndPaginationChange}
                                />

                            </div>
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
