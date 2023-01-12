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
    sort: "",
    brands: ""
  });

  console.log(dataFilter);
  const sortedGoods = (userData, array) => {
    const priceMin = Number(userData.priceFieldMin);
    const priceMax = Number(userData.priceFieldMax);
    let sortGoods = array;
    // Все 4 параметра фильтрации
    if (priceMax && priceMin && dataFilter.inStock && userData.sort === "priceUP" && dataFilter.brands) {
      sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else
    if (priceMax && priceMin && dataFilter.inStock && userData.sort === "priceDown" && dataFilter.brands) {
      sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else
    if (priceMax && priceMin && dataFilter.inStock && userData.sort === "name" && dataFilter.brands) {
      sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else
    if (priceMax && priceMin && dataFilter.inStock && userData.sort === "sale" && dataFilter.brands) {
      sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMax && dataFilter.inStock && userData.sort === "priceUP" && dataFilter.brands) {
      sortGoods = array.filter((item) => !item.absent && item.price <= priceMax && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else
    if (priceMax && dataFilter.inStock && userData.sort === "priceDown" && dataFilter.brands) {
      sortGoods = array.filter((item) => !item.absent && item.price <= priceMax && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else
    if (priceMax && dataFilter.inStock && userData.sort === "name" && dataFilter.brands) {
      sortGoods = array.filter((item) => !item.absent && item.price <= priceMax && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else
    if (priceMax && dataFilter.inStock && userData.sort === "sale" && dataFilter.brands) {
      sortGoods = array.filter((item) => !item.absent && item.price <= priceMax && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMin && dataFilter.inStock && userData.sort === "priceUP" && dataFilter.brands) {
      sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else
    if (priceMin && dataFilter.inStock && userData.sort === "priceDown" && dataFilter.brands) {
      sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else
    if (priceMin && dataFilter.inStock && userData.sort === "name" && dataFilter.brands) {
      sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else
    if (priceMin && dataFilter.inStock && userData.sort === "sale" && dataFilter.brands) {
      sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMin && priceMax && userData.sort === "priceUP" && dataFilter.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.price <= priceMax && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else
    if (priceMin && priceMax && userData.sort === "priceDown" && dataFilter.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.price <= priceMax && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else
    if (priceMin && priceMax && userData.sort === "name" && dataFilter.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.price <= priceMax && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else
    if (priceMin && priceMax && userData.sort === "sale" && dataFilter.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.price <= priceMax && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMin && userData.sort === "priceUP" && dataFilter.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else
    if (priceMin && userData.sort === "priceDown" && dataFilter.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else
    if (priceMin && userData.sort === "name" && dataFilter.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else
    if (priceMin && userData.sort === "sale" && dataFilter.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMax && userData.sort === "priceUP" && dataFilter.brands) {
      sortGoods = array.filter((item) => item.price <= priceMax && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else
    if (priceMax && userData.sort === "priceDown" && dataFilter.brands) {
      sortGoods = array.filter((item) => item.price <= priceMax && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else
    if (priceMax && userData.sort === "name" && dataFilter.brands) {
      sortGoods = array.filter((item) => item.price <= priceMax && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else
    if (priceMax && userData.sort === "sale" && dataFilter.brands) {
      sortGoods = array.filter((item) => item.price <= priceMax && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (dataFilter.inStock && userData.sort === "priceUP" && dataFilter.brands) {
      sortGoods = array.filter((item) => !item.absent && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else
    if (dataFilter.inStock && userData.sort === "priceDown" && dataFilter.brands) {
      sortGoods = array.filter((item) => !item.absent && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else
    if (dataFilter.inStock && userData.sort === "name" && dataFilter.brands) {
      sortGoods = array.filter((item) => !item.absent && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else
    if (dataFilter.inStock && userData.sort === "sale" && dataFilter.brands) {
      sortGoods = array.filter((item) => !item.absent && item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMax && priceMin && dataFilter.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.price <= priceMax && item.brands === dataFilter.brands);
    } else if (priceMin && dataFilter.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.brands === dataFilter.brands);
    } else if (priceMax && dataFilter.brands) {
      sortGoods = array.filter((item) => item.price <= priceMax && item.brands === dataFilter.brands);
    } else if (userData.sort === "priceUP" && dataFilter.brands) {
      sortGoods = array.filter((item) => item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else
    if (userData.sort === "priceDown" && dataFilter.brands) {
      sortGoods = array.filter((item) => item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else
    if (userData.sort === "name" && dataFilter.brands) {
      sortGoods = array.filter((item) => item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else
    if (userData.sort === "sale" && dataFilter.brands) {
      sortGoods = array.filter((item) => item.brands === dataFilter.brands);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMax && priceMin && dataFilter.inStock && userData.sort === "name") {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax);
        sortGoods = _.orderBy(sortGoods, ["name"], ["desc"]);
      } else
      if (priceMax && priceMin && dataFilter.inStock && userData.sort === "sale") {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax);
        sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
      } else
    if (priceMax && priceMin && dataFilter.inStock && userData.sort === "priceUP") {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax);
        sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
      } else
    if (priceMax && priceMin && dataFilter.inStock && userData.sort === "priceDown") {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax);
        sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
      } else
     if (priceMax && priceMin && dataFilter.inStock) {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax);
      } else
    if (priceMin && priceMax && userData.sort === "sale") {
      sortGoods = array.filter(
        (item) => priceMin <= item.price && item.price <= priceMax
      );
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMin && priceMax && userData.sort === "name") {
      sortGoods = array.filter(
        (item) => priceMin <= item.price && item.price <= priceMax
      );
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else if (priceMin && priceMax && userData.sort === "priceUP") {
      sortGoods = array.filter(
        (item) => priceMin <= item.price && item.price <= priceMax
      );
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else if (priceMin && priceMax && userData.sort === "priceDown") {
      sortGoods = array.filter(
        (item) => priceMin <= item.price && item.price <= priceMax
      );
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else if (dataFilter.brands && dataFilter.inStock) {
      sortGoods = array.filter((item) => item.brands === dataFilter.brands && !item.absent);
    } else if (dataFilter.inStock && userData.sort === "priceUP") {
      sortGoods = array.filter((item) => !item.absent);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else if (dataFilter.inStock && userData.sort === "priceDown") {
      sortGoods = array.filter((item) => !item.absent);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else if (dataFilter.inStock && userData.sort === "name") {
      sortGoods = array.filter((item) => !item.absent);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else if (dataFilter.inStock && userData.sort === "sale") {
      sortGoods = array.filter((item) => !item.absent);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMax && dataFilter.inStock) {
      sortGoods = array.filter((item) => !item.absent && item.price <= priceMax);
    } else if (priceMin && dataFilter.inStock) {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price);
      } else if (priceMax && userData.sort === "sale") {
      sortGoods = array.filter((item) => item.price <= priceMax);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMax && userData.sort === "name") {
      sortGoods = array.filter((item) => item.price <= priceMax);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else if (priceMax && userData.sort === "priceUP") {
      sortGoods = array.filter((item) => item.price <= priceMax);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else if (priceMax && userData.sort === "priceDown") {
      sortGoods = array.filter((item) => item.price <= priceMax);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else if (priceMin && userData.sort === "sale") {
      sortGoods = array.filter((item) => priceMin <= item.price);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMin && userData.sort === "name") {
      sortGoods = array.filter((item) => priceMin <= item.price);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else if (priceMin && userData.sort === "priceUP") {
      sortGoods = array.filter((item) => priceMin <= item.price);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else if (priceMin && userData.sort === "priceDown") {
      sortGoods = array.filter((item) => priceMin <= item.price);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else if (userData.sort === "priceDown") {
      sortGoods = _.orderBy(array, ["price"], ["asc"]);
    } else if (userData.sort === "priceUP") {
      sortGoods = _.orderBy(array, ["price"], ["desc"]);
    } else if (userData.sort === "name") {
      sortGoods = _.orderBy(array, ["name"], ["asc"]);
    } else if (userData.sort === "sale") {
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
    } else if (dataFilter.brands) {
      sortGoods = array.filter((item) => item.brands === dataFilter.brands);
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
                label="Брэнд"
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
