import React, { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { paginate } from "../../utils/paginate";
import FilterBlock from "../common/filterBlock";
import Footer from "../common/footer";
import ProductCardsList from "../common/goods/productCardList";
import HeaderMenu from "../common/headerMenu";
import Loader from "../common/loader";
import Pagination from "../common/pagination";
import styles from "./allGoods.module.scss";
import { sortedGoods } from "../../utils/sortFilter";
const initialState = {
    priceFieldMin: "",
    priceFieldMax: "",
    typeOfNeedles: "",
    inStock: false,
    sort: "",
    brands: ""
};
const allGoods = () => {
    const [allGoods, setAllGoods] = useState(initialState);
  const { products, count, isLoading } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const lastPage = Math.ceil(count / pageSize);
  const sortedGoodsBox = sortedGoods(allGoods, products);
  const heandleChange = (target) => {
    setAllGoods((prevState) => ({ ...prevState, [target.name]: target.value }));
};
  const userCrop = paginate(sortedGoodsBox, currentPage, pageSize);

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
      setCurrentPage((prevState) => prevState - 1);
    }
  };
  const heandlerNextPaginationChange = () => {
    if (currentPage === lastPage) {
      setCurrentPage(1);
    } else {
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  const heandlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const dataReload = () => {
    setAllGoods(initialState);
};
  return (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {!isLoading ? (
            <div className={styles.allGoods}>
                <h1 className={styles.allGoods_title}>Все товары</h1>
                <div>
                    <FilterBlock data={allGoods} onChange={heandleChange} label="Брэнд" onClick={dataReload}/>
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
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default allGoods;
