import React from "react";
import Footer from "../../common/footer";
import HeaderMenu from "../../common/headerMenu";
import styles from "./favouritePage.module.scss";
import ProductCardsList from "../../common/goods/productCardList";
import { useSelector } from "react-redux";
import { getCurrentLikeBox } from "../../../store/favourite";
import { getCurrentUserData } from "../../../store/users";
const FavouritePage = () => {
  const currentUserData = useSelector(getCurrentUserData());
  const products = useSelector(getCurrentLikeBox(currentUserData._id));
  return (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <main>
        <div className={styles.wrapper}>
          <div className={styles.container}>
          <div className={styles.favourite}>
              <h1 className={styles.favourite_title}>Избранное</h1>
              {products.length ? <ProductCardsList products={products} /> : <h1 className={styles.favourite_empty}>В избранном ничего нет</h1>}
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
