import React from "react";
import PropTypes from "prop-types";
import styles from "./cartItem.module.scss";
import TextField from "../../common/form/textField";
import deleteItem from "../../../assets/icons/navigation/delete.png";
import { useDispatch } from "react-redux";
import { addToCartItem, removeFromCartItem, removeFromCartItemsBox } from "../../../store/cart";

const CartItem = ({ product }) => {
  const amountOfDiscount = product.sales ? product.sales * product.price : null;
  const totalPrice = ((product.price - (amountOfDiscount)) * product.quantity);
  const dispatch = useDispatch();
  return <div className={styles.cartItem}>
    <img src={product.url} alt="product" className={styles.cartItem_picture} />
    <span className={styles.cartItem_name}>{product.name}</span>
    <span className={styles.cartItem_priceItem}>{product.price}</span>
    <button className={styles.cartItem_decrementBtn} onClick={() => (dispatch(removeFromCartItem(product)))}>-</button>
    <div className={styles.cartItem_numberField}>
      <TextField type="text" value={product.quantity} />
    </div>
    <button className={styles.cartItem_incrementBtn} onClick={() => (dispatch(addToCartItem(product)))}>+</button>
    <span className={styles.cartItem_itemSum}>{totalPrice}</span>
    <button className={styles.cartItem_deleteItem} onClick={() => (dispatch(removeFromCartItemsBox(product._id)))}><img src={deleteItem} alt="deleteItem" /></button>
  </div>;
};
CartItem.propTypes = {
  product: PropTypes.object.isRequired
};
export default CartItem;
