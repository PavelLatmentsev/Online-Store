import React from "react";
import styles from "./salesPage.module.scss";
import NavButton from "../../common/uniButton";
import ProductCardsList from "../../common/goods/productCardList";
import Loader from "../../common/loader";
import FilterButton from "../../common/filterButton";
import HeaderMenu from "../../common/headerMenu";
import Footer from "../../common/footer";
import { useProducts } from "../../../hooks/useProducts";
import { useParams } from "react-router-dom";
import ProductCardPage from "../productCardPage/productCardPage";

const SalesPage = () => {
  const { productId } = useParams();
  const { products, isLoading, getFilterSales, getById } = useProducts();
  const filtredSales = products.filter(({ category, sales }) => category === "machines" && sales);
  const productCard = getById(productId, filtredSales);
  return (productId ? <ProductCardPage productCard={productCard} /> : (<div>
    <header>
      <HeaderMenu />
    </header>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {!isLoading ? (<div className={styles.sales}>
          <div className={styles.sales_title}>
            <h1 className={styles.sales_title_header}>Скидки</h1>
          </div>
          <div className={styles.sales_buttonBlock}>
            <div className={styles.sales_buttonBlock_item}>  <FilterButton title="Татту Держатели" onChange={getFilterSales} id="#cartridge" filtredProducts={filtredSales} /></div>
            <div className={styles.sales_buttonBlock_item}> <FilterButton title="Татту Машинки" onChange={getFilterSales} id="#machines" filtredProducts={filtredSales} /></div>
            <div className={styles.sales_buttonBlock_item}>   <FilterButton title="Татту Иглы" onChange={getFilterSales} id="#needles" filtredProducts={filtredSales} /></div>
            <div className={styles.sales_buttonBlock_item}>   <FilterButton title="Расходники" onChange={getFilterSales} id="#consumables" filtredProducts={filtredSales} /></div>
          </div>
          <div className={styles.sales_wrapperSalesBlock}>
            <ProductCardsList products={filtredSales} />
            <div className={styles.sales_btn}>
              <NavButton fill="#EEEEEE;" color="#BB8C5F" title="Показать еще" />
            </div>
          </div>

        </div>) : <Loader />}
      </div>
    </div>
    <footer> <Footer /></footer>
  </div>
  ));
};
export default SalesPage;
