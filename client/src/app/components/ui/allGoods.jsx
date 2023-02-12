import React from "react";
import Footer from "../common/footer";
import HeaderMenu from "../common/headerMenu";
import styles from "./allGoods.module.scss";
const allGoods = () => {
  return (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.allGoods}>

            </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default allGoods;
