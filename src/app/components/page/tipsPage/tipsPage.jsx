import React, { useState } from "react";
import styles from "./tipsPage.module.scss";
import NavButton from "../../common/uniButton";
import ProductCardsList from "../../common/goods/productCardList";
import Loader from "../../common/loader";
import FilterButton from "../../common/filterButton";
import FilterBlock from "../../common/filterBlock";
import HeaderMenu from "../../common/headerMenu";
import Footer from "../../common/footer";
import { useProducts } from "../../../hooks/useProducts";
import { useParams } from "react-router-dom";
import ProductCardPage from "../productCardPage/productCardPage";
import { sortedGoods } from "../../utils/sortFilter";
const initialState = {
  priceFieldMin: "",
  priceFieldMax: "",
  typeOfNeedles: "",
  inStock: false,
  sort: "",
  brands: ""
};
const TipsPage = () => {
  const { filtredTips, getFilterTipsSales, isLoading, getById } = useProducts();
  const { productId } = useParams();
  const [dataFilter, setDataFilter] = useState(initialState);
  const sortedGoodsBox = sortedGoods(dataFilter, filtredTips);
  console.log(sortedGoodsBox);
  const heandleChange = (target) => {
    setDataFilter((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };
  const productCard = getById(productId, filtredTips);
  const dataReload = () => {
    setDataFilter(initialState);
  };

  return productId ? (
    <ProductCardPage productCard={productCard} />
  ) : (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {!isLoading ? (
            <div className={styles.main}>
              <div className={styles.main_title}>
                <h1 className={styles.main_title_header}>Наконечники</h1>
              </div>
              <div className={styles.main_buttonBlock}>
                <div className={styles.main_buttonBlock_item}>
                  {" "}
                  <FilterButton
                    title="Для Начинающих"
                    onChange={getFilterTipsSales}
                    id="#starter"
                  />
                </div>
                <div className={styles.main_buttonBlock_item}>
                  {" "}
                  <FilterButton
                    title="От Билдеров"
                    onChange={getFilterTipsSales}
                    id="#builders"
                  />
                </div>
                <div className={styles.main_buttonBlock_item}>
                  {" "}
                  <FilterButton
                    title="Для Профессионалов"
                    onChange={getFilterTipsSales}
                    id="#professional"
                  />
                </div>
                <div className={styles.main_buttonBlock_item}>
                  {" "}
                  <FilterButton
                    title="Расходники"
                    onChange={getFilterTipsSales}
                    id="#consumables"
                  />
                </div>
              </div>
              <FilterBlock
                data={dataFilter}
                onChange={heandleChange}
                label="Брэнд"
                onClick={dataReload}
              />
              <div className={styles.main_wrapperBlock}>
                <ProductCardsList products={sortedGoodsBox} />
                <div className={styles.main_btn}>
                  <NavButton
                    fill="#EEEEEE;"
                    color="#BB8C5F"
                    title="Показать еще"
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

export default TipsPage;
