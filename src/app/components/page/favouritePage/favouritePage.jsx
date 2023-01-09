import React from "react";
import Footer from "../../common/footer";
import HeaderMenu from "../../common/headerMenu";
import styles from "./favouritePage.module.scss";
import ProductCardsList from "../../common/goods/productCardList";
const FavouritePage = () => {
    const products = [];
  return (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <main>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.favourite}>
              <ProductCardsList products={products}/>
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

export default FavouritePage;
