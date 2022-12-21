import React, { useState, useEffect } from "react";
import styles from "./salesPage.module.scss";
import NavButton from "../../common/uniButton";
import ProductCard from "../../common/productCard";
import Loader from "../../common/loader";
import API from "../../../api";
import FilterButton from "../../common/filterButton";

const SalesPage = () => {
  const [products, setProducts] = useState([]);
  const [filtredSales, setFiltredSales] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(filtredSales);
  useEffect(() => {
    API.products.fetchAll().then((res) => {
      setIsLoading(true);
      setProducts(res);
      setFiltredSales(res.filter(({ category, sales }) => category === "machines" && sales));
      setIsLoading(false);
    });
  }, []);

  const getFilterSales = (id) => {
    if (id === "#cartridge") {
      return setFiltredSales(products.filter(({ category, sales }) => category === "cartridge" && sales));
    } else if (id === "#machines") {
      return setFiltredSales(products.filter(({ category, sales }) => category === "machines" && sales));
    } else if (id === "#needles") {
      return setFiltredSales(products.filter(({ category, sales }) => category === "needles" && sales));
    } else if (id === "#consumables") {
      return setFiltredSales(products.filter(({ category, sales }) => category === "consumables" && sales));
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {!isLoading ? (<div className={styles.sales}>
          <div className={styles.sales_title}>
            <h1 className={styles.sales_title_header}>Скидки</h1>
          </div>
          <div className={styles.sales_buttonBlock}>
            <div className={styles.sales_buttonBlock_item}>  <FilterButton title="Татту Держатели" onChange={() => getFilterSales(event.target.id)} id="#cartridge" /></div>
            <div className={styles.sales_buttonBlock_item}> <FilterButton title="Татту Машинки" onChange={() => getFilterSales(event.target.id)} id="#machines" /></div>
            <div className={styles.sales_buttonBlock_item}>   <FilterButton title="Татту Иглы" onChange={() => getFilterSales(event.target.id)} id="#needles" /></div>
            <div className={styles.sales_buttonBlock_item}>   <FilterButton title="Расходники" onChange={() => getFilterSales(event.target.id)} id="#consumables" /></div>
          </div>
          <div className={styles.sales_wrapperSalesBlock}>
            <div className={styles.sales_salesBlock}>
              {filtredSales.map((product, index) => <ProductCard product={product} key={index} />)}
            </div>
            <div className={styles.sales_btn}>
              <NavButton fill="#EEEEEE;" color="#BB8C5F" title="Показать еще" />
            </div>
          </div>

        </div>) : <Loader />}
      </div>
    </div>
  );
};
export default SalesPage;
