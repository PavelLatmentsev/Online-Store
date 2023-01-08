import React from "react";
import HeaderMenu from "../../common/headerMenu";
import Footer from "../../common/footer";
import styles from "./shoppingCart.module.scss";
import CartItem from "./cartItem";
const ShoppingCart = () => {
    const shoppingCartArray = [{
        _id: "67rdca3eeb7f6f324geed471815",
        name: "Foxxx Kitsune Mini Black Vintage RCA",
        price: 6000,
        favorite: false,
        sales: false,
        url: "../../assets/productsCards/machines/foxx-kitsune.png",
        absent: false,
        hit: true,
        novelty: false,
        promotion: false,
        category: "machines",
        popular: false,
        totalnumber: 3,
        totalPrice: 17200
      }, {
        _id: "67rdca3eeb7f6fgee4234d471816",
        name: "Foxxx Viper Fox Golden Vintage Lot #1 RCA",
        price: 8730,
        favorite: false,
        sales: false,
        url: "../../assets/productsCards/machines/foxx-viper.png",
        absent: false,
        hit: true,
        novelty: false,
        promotion: false,
        category: "machines",
        popular: true,
        totalnumber: 4,
        totalPrice: 12300
      }];
      console.log(shoppingCartArray);
  return (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.shoppingCart_title}>Корзина</h1>
          <div className={styles.shoppingCart}>
            <div className={styles.shoppingCart_goodsList}>
              <div className={styles.shoppingCart_goodsList_header}>
                <span className={styles.shoppingCart_goodsList_header_name}>Наименование</span>
                <span className={styles.shoppingCart_goodsList_header_price}>Цена</span>
                <span className={styles.shoppingCart_goodsList_header_number}>Количество</span>
                <span className={styles.shoppingCart_goodsList_header_sum}>Стоимость</span>
              </div>
              <div className={styles.shoppingCart_goodsList_body}>
                  {shoppingCartArray.map((cartItem) => <CartItem product={cartItem} key={cartItem._id}/>)};
              </div>
            </div>
            <div className={styles.shoppingCart_total}>
              <div></div>
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
