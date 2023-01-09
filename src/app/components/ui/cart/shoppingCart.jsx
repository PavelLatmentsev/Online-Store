import React from "react";
import HeaderMenu from "../../common/headerMenu";
import Footer from "../../common/footer";
import styles from "./shoppingCart.module.scss";
import CartItem from "./cartItem";
import TextField from "../../common/form/textField";
import SeeInCatalogBtn from "../../common/seeInCatalogBtn";
import NavButton from "../../common/uniButton";
import { useDispatch, useSelector } from "react-redux";
import { activatedPromocode, getCartItemsBox, getPromocode, getQuantityGoods, getTotalSale, getTotalSum } from "../../../store/cart";
const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItemsBox = useSelector(getCartItemsBox());
  const totalSales = useSelector(getTotalSale());
  const totalQuntity = useSelector(getQuantityGoods());
  const totalSum = useSelector(getTotalSum());
  let Promocode = useSelector(getPromocode());
  console.log(Promocode);
  const heandleChange = (target) => {
    if (target) {
      Promocode = ({ ...target, [target.name]: target.value });
    }
    return Promocode;
  };

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
                <span className={styles.shoppingCart_goodsList_header_name}>
                  Наименование
                </span>
                <span className={styles.shoppingCart_goodsList_header_price}>
                  Цена
                </span>
                <span className={styles.shoppingCart_goodsList_header_number}>
                  Количество
                </span>
                <span className={styles.shoppingCart_goodsList_header_sum}>
                  Стоимость
                </span>
              </div>
              <div className={styles.shoppingCart_goodsList_body}>
                {cartItemsBox.map((cartItem) => (
                  <CartItem product={cartItem} key={cartItem._id} />
                ))}
              </div>
            </div>
            <div className={styles.shoppingCart_total}>
              <div className={styles.shoppingCart_total_sumList}>
                <div className={styles.shoppingCart_total_sumList_header}>
                  <div className={styles.shoppingCart_total_sumList_header_item}>
                    <span>Всего единиц товара:</span> <span>{totalQuntity}</span>
                  </div>
                  <div className={styles.shoppingCart_total_sumList_header_item}>
                    <span>Общая скидка:</span> <span>{totalSales}</span>
                  </div>
                  <div className={styles.shoppingCart_total_sumList_header_item}>
                    <span>Доп. услуги:</span> <span>0₽</span>
                  </div>
                  <div className={styles.shoppingCart_total_sumList_header_item}>
                    <span>Итого:</span> <span>{totalSum}</span>
                  </div>
                </div>
                <div className={styles.shoppingCart_total_sumList_promo}>
                  <p className={styles.shoppingCart_total_sumList_promo_title}>Промокод</p>
                  <div className={styles.shoppingCart_total_sumList_promo_field}>
                    <TextField type="text" value={Promocode || ""} onChange={heandleChange} name="promocode" />
                  </div>
                  <div className={styles.shoppingCart_total_sumList_promo_Btn}>
                    <SeeInCatalogBtn title="Активировать промокод" onClick={dispatch(activatedPromocode())} />
                  </div>
                </div>
              </div>
              <div className={styles.shoppingCart_totalBtn}>
                <NavButton color="#FAF6F2" fill="#524336" title="Оформить заказ" />
              </div>
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
