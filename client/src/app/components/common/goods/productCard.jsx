import React, { useState } from "react";
import styles from "./productCard.module.scss";
import like from "../../../assets/icons/like/Like.png";
import unlike from "../../../assets/icons/like/unLike.png";
import PropTypes from "prop-types";
import sales from "../../../assets/icons/marks/sales.png";
import promotion from "../../../assets/icons/marks/promotion.png";
import hit from "../../../assets/icons/marks/hit.png";
import novelty from "../../../assets/icons/marks/novelty.png";
import absent from "../../../assets/icons/marks/absent.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addLike, getLikeStatus } from "../../../store/favourite";
import { getCurrentUserData, getIsLoggedIn } from "../../../store/users";
import { addToCartItemsBox } from "../../../store/cart";
import TextField from "../form/textField";
import cart from "../../../assets/icons/navigation/cartBox.png";
const ProductCard = ({ product }) => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  const priceWithSales = product.price - (product.sales ? product.sales * product.price : null);
  const liked = useSelector(getLikeStatus(product._id)) || false;
  const currentUserData = useSelector(getCurrentUserData());
  const dispatch = useDispatch();
  // const cartQuantity = useSelector(getQuantity());
  const [countProduct, setCountProduct] = useState(0);
  const addToCartItem = () => {
    setCountProduct(prevState => prevState + 1);
  };
  const removeFromCartItem = () => {
   return countProduct ? setCountProduct(prevState => prevState - 1) : 0;
  };
  const addProductsToCart = () => {
    if (countProduct) {
      dispatch(addToCartItemsBox({ ...product, quantity: countProduct }));
      setCountProduct(0);
    }
  };

  const pictureBox = { sales, hit, novelty, promotion, absent };
  const productBox = { sales: product.sales, hit: product.hit, promotion: product.promotion, novelty: product.novelty, absent: product.absent };
const filtredBox = [];
for (const item in productBox) {
  if (productBox[item]) {
    filtredBox.push(item);
}
}
const first = filtredBox[Math.floor(Math.random() * filtredBox.length)];
const newBox = filtredBox.filter(item => item !== first);
const second = newBox[Math.floor(Math.random() * filtredBox.length)];
  return (

    <div className={styles.productCard}>
      <div className={styles.productCard_imageBlock}>
        <div>
          <Link to={`/catalog/${product.category}/${product._id}`}>
            <img
              src={product.url}
              alt="ProductCard"
              className={styles.productCard_slide}
            />
             {productBox[first] && <img
                src={pictureBox[first]}
                alt="promotion"
                className={styles.productCard_marks}
              />}
              {productBox[second] && <img
                src={pictureBox[second]}
                alt="promotion"
                className={styles.productCard_marks + " " + styles.secondMarksPosition}
              />}
          </Link>
          {isLoggedIn ? <button
            className={styles.productCard_likeBtn}
            onClick={() => dispatch(addLike({ ...product, userId: currentUserData ? currentUserData._id : "" }))}
          >
            <img src={liked.likeStatus ? like : unlike} alt="favorite" />
          </button> : ""}
        </div>
        <div>
          <Link to={`/catalog/${product.category}/${product._id}`}>
            {" "}
            <div className={styles.productCard_infoBox}>
              <p className={styles.productCard_title}>{product.name}</p>
            </div>
          </Link>
        </div>
        <Link to={`/catalog/${product.category}/${product._id}`}>
          <div className={styles.productCard_priceBlock}>
            <span className={styles.productCard_price}>
              {product.sales ? priceWithSales : product.price} ₽
            </span>
            <span className={styles.productCard_startPrice}>
              {product.sales ? product.price : ""}
            </span>
          </div>
        </Link>
      </div>
      <div className={styles.productCard_addToCart}>
        <button
                                        className={
                                            styles.productCard_addToCart_decrement
                                        }
                                        onClick={() => removeFromCartItem()}
                                    >
                                        -
                                    </button>
                                    <div
                                        className={
                                            styles.productCard_addToCart_priceField
                                        }
                                    >
                                        <TextField
                                            type="text"
                                            // onChange={heandleChange}
                                            name="productPrice"
                                            value={countProduct}
                                        />
                                    </div>

                                    <button
                                        className={
                                          styles.productCard_addToCart_increment
                                        }
                                        onClick={() => addToCartItem()}
                                    >
                                        +
                                    </button>
                                    <button className={
                                            styles.productCard_addToCart_button
                                        }>  <img src={cart} alt="cart" className={
                                          styles.productCard_addToCart_buttonPicture
                                      } onClick={addProductsToCart}/></button>

      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
