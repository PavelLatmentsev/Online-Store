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
import _ from "lodash";
const TipsPage = () => {
  const { filtredTips, getFilterTipsSales, isLoading, getById } = useProducts();
  const { productId } = useParams();
  const [dataFilter, setDataFilter] = useState({
    priceFieldMin: "",
    priceFieldMax: "",
    typeOfNeedles: "",
    inStock: false,
    Sort: ""
  });

  const sortedGoods = (userData, array) => {
    const priceMin = Number(userData.priceFieldMin);
    const priceMax = Number(userData.priceFieldMax);
    let sortGoods = array;
    if (priceMax && priceMin && dataFilter.inStock && userData.Sort === "name") {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax);
        sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
      } else
      if (priceMax && priceMin && dataFilter.inStock && userData.Sort === "sale") {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax);
        sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
      } else
    if (priceMax && priceMin && dataFilter.inStock && userData.Sort === "priceUP") {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax);
        sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
      } else
    if (priceMax && priceMin && dataFilter.inStock && userData.Sort === "priceDown") {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax);
        sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
      } else
     if (priceMax && priceMin && dataFilter.inStock) {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax);
      } else
    if (priceMin && priceMax && userData.Sort === "sale") {
      sortGoods = array.filter(
        (item) => priceMin <= item.price && item.price <= priceMax
      );
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMin && priceMax && userData.Sort === "name") {
      sortGoods = array.filter(
        (item) => priceMin <= item.price && item.price <= priceMax
      );
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else if (priceMin && priceMax && userData.Sort === "priceUP") {
      sortGoods = array.filter(
        (item) => priceMin <= item.price && item.price <= priceMax
      );
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else if (priceMin && priceMax && userData.Sort === "priceDown") {
      sortGoods = array.filter(
        (item) => priceMin <= item.price && item.price <= priceMax
      );
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else if (dataFilter.inStock && userData.Sort === "priceUP") {
      sortGoods = array.filter((item) => !item.absent);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else if (dataFilter.inStock && userData.Sort === "priceDown") {
      sortGoods = array.filter((item) => !item.absent);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else if (dataFilter.inStock && userData.Sort === "name") {
      sortGoods = array.filter((item) => !item.absent);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else if (dataFilter.inStock && userData.Sort === "sale") {
      sortGoods = array.filter((item) => !item.absent);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMax && dataFilter.inStock) {
      sortGoods = array.filter((item) => !item.absent && item.price <= priceMax);
    } else if (priceMin && dataFilter.inStock) {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price);
      } else if (priceMax && userData.Sort === "sale") {
      sortGoods = array.filter((item) => item.price <= priceMax);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMax && userData.Sort === "name") {
      sortGoods = array.filter((item) => item.price <= priceMax);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else if (priceMax && userData.Sort === "priceUP") {
      sortGoods = array.filter((item) => item.price <= priceMax);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else if (priceMax && userData.Sort === "priceDown") {
      sortGoods = array.filter((item) => item.price <= priceMax);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else if (priceMin && userData.Sort === "sale") {
      sortGoods = array.filter((item) => priceMin <= item.price);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMin && userData.Sort === "name") {
      sortGoods = array.filter((item) => priceMin <= item.price);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else if (priceMin && userData.Sort === "priceUP") {
      sortGoods = array.filter((item) => priceMin <= item.price);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else if (priceMin && userData.Sort === "priceDown") {
      sortGoods = array.filter((item) => priceMin <= item.price);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else if (userData.Sort === "priceDown") {
      sortGoods = _.orderBy(array, ["price"], ["asc"]);
    } else if (userData.Sort === "priceUP") {
      sortGoods = _.orderBy(array, ["price"], ["desc"]);
    } else if (userData.Sort === "name") {
      sortGoods = _.orderBy(array, ["name"], ["asc"]);
    } else if (userData.Sort === "sale") {
      sortGoods = _.orderBy(array, ["sale"], ["asc"]);
    } else if (priceMin && priceMax) {
      sortGoods = array.filter(
        (item) => priceMin <= item.price && item.price <= priceMax
      );
    } else if (priceMin) {
      sortGoods = array.filter((item) => priceMin <= item.price);
    } else if (priceMax) {
      sortGoods = array.filter((item) => item.price <= priceMax);
    } else if (dataFilter.inStock) {
      sortGoods = array.filter((item) => !item.absent);
    }
    return sortGoods;
  };
  const sortedGoodsBox = sortedGoods(dataFilter, filtredTips);
  const heandleChange = (target) => {
    setDataFilter((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };
  const productCard = getById(productId, filtredTips);

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
                label="Материал"
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
