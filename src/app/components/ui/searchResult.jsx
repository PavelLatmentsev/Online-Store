import React from "react";
import { useSelector } from "react-redux";
import { getSearchResultBox } from "../../store/search";
import Footer from "../common/footer";
import ProductCard from "../common/goods/productCard";
import HeaderMenu from "../common/headerMenu";
import styles from "./searchResult.module.scss";
import { Link } from "react-router-dom";
const SearchResult = () => {
  const resultSearch = useSelector(getSearchResultBox());
  console.log(resultSearch);
  return (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <main>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.searchResult}>
              {resultSearch.map((product) => (
                <Link
                  to={`/catalog/${product.category}/${product._id}`}
                  key={product._id}
                >
                  <>
                    <ProductCard product={product} />
                  </>
                </Link>
              ))}
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
