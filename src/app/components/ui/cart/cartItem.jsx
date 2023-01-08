import React from "react";
import PropTypes from "prop-types";
import styles from "./cartItem.module.scss";
import TextField from "../../common/form/textField";
import deleteItem from "../../../assets/icons/navigation/delete.png";

const CartItem = ({ product }) => {
  return <div className={styles.cartItem}>
         <img src={product.url} alt="product" className={styles.cartItem_picture} />
         <span className={styles.cartItem_name}>{product.name}</span>
         <span className={styles.cartItem_priceItem}>{product.price}</span>
         <button className={styles.cartItem_decrementBtn}>-</button>
         <div className={styles.cartItem_numberField}>
         <TextField type= "text" value={product.totalNumber}/>
         </div>
         <button className={styles.cartItem_incrementBtn}>+</button>
         <span className={styles.cartItem_itemSum}>{product.totalPrice}</span>
         <button className={styles.cartItem_deleteItem}><img src={deleteItem} alt="deleteItem" /></button>
  </div>;
};
CartItem.propTypes = {
  product: PropTypes.object.isRequired
};
export default CartItem;
