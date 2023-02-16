import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./cartItem.module.scss";
import TextField from "../../common/form/textField";
import deleteItem from "../../../assets/icons/navigation/delete.png";
import { useDispatch } from "react-redux";
import { removeFromCartItemsBox, updateCartItemBox } from "../../../store/cart";
import { NavLink } from "react-router-dom";

const CartItem = ({ product }) => {
  const [countProduct, setCountProduct] = useState(product.quantity);
  const dispatch = useDispatch();
  const amountOfDiscount = product.sales ? product.sales * product.price : null;
  const totalPrice = (product.price - amountOfDiscount) * countProduct;
  const addToCartItem = () => {
    setCountProduct((prevState) => prevState + 1);
    dispatch(updateCartItemBox({ ...product, quantity: countProduct + 1 }));
  };
  const removeFromCartItem = () => {
    if (countProduct) {
      setCountProduct((prevState) => prevState - 1);
      dispatch(updateCartItemBox({ ...product, quantity: countProduct - 1 }));
    } else {
      return 0;
    }
  };
  return (
    <div className={styles.cartItem}>
      <NavLink to={`/catalog/${product.category}/${product._id}`}>
        <img
          src={product.url}
          alt="product"
          className={styles.cartItem_picture}
        />
      </NavLink>
      <span className={styles.cartItem_name}>{product.name}</span>
      <span className={styles.cartItem_priceItem}>{product.price}</span>
      <button
        className={styles.cartItem_decrementBtn}
        onClick={removeFromCartItem}
      >
        -
      </button>
      <div className={styles.cartItem_numberField}>
        <TextField type="text" value={countProduct} name="cartItem" />
      </div>
      <button className={styles.cartItem_incrementBtn} onClick={addToCartItem}>
        +
      </button>
      <span className={styles.cartItem_itemSum}>{totalPrice}</span>
      <button
        className={styles.cartItem_deleteItem}
        onClick={() => dispatch(removeFromCartItemsBox(product._id))}
      >
        <img src={deleteItem} alt="deleteItem" />
      </button>
    </div>
  );
};
CartItem.propTypes = {
  product: PropTypes.object.isRequired
};
export default CartItem;
