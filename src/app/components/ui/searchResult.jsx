import React from "react";
import { useSelector } from "react-redux";
import { getSearchResultBox } from "../../store/search";
import Footer from "../common/footer";
import ProductCard from "../common/goods/productCard";
import HeaderMenu from "../common/headerMenu";
import styles from "./searchResult.module.scss";
const SearchResult = () => {
  const resultSearch = useSelector(getSearchResultBox());
  return (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <main>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.searchResult}>
              {resultSearch.map((product) => <ProductCard product={product} key={product._id} />)}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SearchResult;
