import React from "react";
import HeaderMenu from "../common/headerMenu";
import Footer from "../common/footer";
import styles from "./shoppingCart.module.scss";
const ShoppingCart = () => {
  return (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.shoppingCart_title}>Корзина</h1>
          <div className={styles.shoppingCart}>
            <div>

            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ShoppingCart;
