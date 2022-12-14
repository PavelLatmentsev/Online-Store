import React, { useState } from "react";
import styles from "./productCardPage.module.scss";
import PropTypes from "prop-types";
import HeaderMenu from "../../common/headerMenu";
import Footer from "../../common/footer";
import like from "../../../assets/icons/like/Like.png";
import unlike from "../../../assets/icons/like/unLike.png";
import sales from "../../../assets/icons/marks/sales.png";
import promotion from "../../../assets/icons/marks/promotion.png";
import hit from "../../../assets/icons/marks/hit.png";
import novelty from "../../../assets/icons/marks/novelty.png";
import absent from "../../../assets/icons/marks/absent.png";
import NavButton from "../../common/uniButton";
import TextField from "../../common/form/textField";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCartItem,
    addToCartItemsBox,
    getQuantity,
    removeFromCartItem
} from "../../../store/cart";
// import { addLike, getLikeStatus } from "../../../store/favourite";
const ProductCardPage = ({ productCard }) => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector(getQuantity());
    const [favorite, setFavorite] = useState(false);
    // const likeStatus = useSelector(getLikeStatus(productCard._id));

    const heandleChange = (target) => {
        if (target) {
            return { [target.name]: cartQuantity };
        }
    };

    const heandleChangeLike = () => {
        setFavorite((prevState) => !prevState);
    };
    const priceWithSales =
        productCard.price -
        (productCard.sales ? productCard.sales * productCard.price : null);
    return (
        <div>
            <header>
                <HeaderMenu />
            </header>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.productCardPage}>
                        <div className={styles.productCardPage_header}>
                            <div className={styles.productCardPage_header_imageBlock}>
                                <img
                                    src={productCard.url}
                                    alt="productCard"
                                    className={styles.productCardPage_header_imageBlock_img}
                                />
                                {productCard.hit && (
                                    <img
                                        src={hit}
                                        alt="hit"
                                        className={styles.productCardPage_header_imageBlock_marks}
                                    />
                                )}
                                {productCard.promotion && (
                                    <img
                                        src={promotion}
                                        alt="promotion"
                                        className={styles.productCardPage_header_imageBlock_marks}
                                    />
                                )}
                                {productCard.sales && (
                                    <img
                                        src={sales}
                                        alt="sales"
                                        className={styles.productCardPage_header_imageBlock_marks}
                                    />
                                )}
                                {productCard.novelty && (
                                    <img
                                        src={novelty}
                                        alt="novelty"
                                        className={styles.productCardPage_header_imageBlock_marks}
                                    />
                                )}
                                {productCard.absent && (
                                    <img
                                        src={absent}
                                        alt="absent"
                                        className={styles.productCardPage_header_imageBlock_marks}
                                    />
                                )}
                                <button
                                    className={styles.productCardPage_header_imageBlock_btn}
                                    onClick={heandleChangeLike}
                                >
                                    <img src={favorite ? like : unlike} alt="favorite" />
                                </button>
                            </div>
                            <div className={styles.productCardPage_header_descriptionBlock}>
                                <div>
                                    <h1
                                        className={
                                            styles.productCardPage_header_descriptionBlock_title
                                        }
                                    >
                                        {productCard.name}
                                    </h1>
                                    <div
                                        className={
                                            styles.productCardPage_header_descriptionBlock_price
                                        }
                                    >
                                        <span
                                            className={
                                                styles.productCardPage_header_descriptionBlock_priceFinal
                                            }
                                        >
                                            {productCard.sales ? priceWithSales : productCard.price} ???
                                        </span>
                                        <span
                                            className={
                                                styles.productCardPage_header_descriptionBlock_priceStart
                                            }
                                        >
                                            {productCard.sales ? productCard.price : ""}
                                        </span>
                                        <span
                                            className={
                                                styles.productCardPage_header_descriptionBlock_amount
                                            }
                                        >
                                            ??????????????: ??????????
                                        </span>
                                    </div>
                                    <p
                                        className={
                                            styles.productCardPage_header_descriptionBlock_description
                                        }
                                    >
                                        ????????????????
                                    </p>
                                    <p
                                        className={
                                            styles.productCardPage_header_descriptionBlock_description
                                        }
                                    >
                                        Viper - ?????????????? ?????????????? ???? ???????????? ????????????, ???????? ???????????? ????????????
                                        ?????????????? ???? ???????????????? ?? ?????????????? ???????????????????????? ????????????. ?? ?????????? ??
                                        ???????? ?????? ???????????? ???????????? ?????????? 120 ??????????
                                    </p>
                                </div>
                                <div
                                    className={
                                        styles.productCardPage_header_descriptionBlock_basket
                                    }
                                >
                                    <button
                                        className={
                                            styles.productCardPage_header_descriptionBlock_decrement
                                        }
                                        onClick={() => dispatch(removeFromCartItem(productCard))}
                                    >
                                        -
                                    </button>
                                    <div
                                        className={
                                            styles.productCardPage_header_descriptionBlock_priceField
                                        }
                                    >
                                        <TextField
                                            type="text"
                                            onChange={heandleChange}
                                            name="productPrice"
                                            value={cartQuantity || 0}
                                        />
                                    </div>

                                    <button
                                        className={
                                            styles.productCardPage_header_descriptionBlock_increment
                                        }
                                        onClick={() => dispatch(addToCartItem(productCard))}
                                    >
                                        +
                                    </button>
                                    <div
                                        className={
                                            styles.productCardPage_header_descriptionBlock_addBtn
                                        }
                                    >
                                        <NavButton
                                            fill="#524336"
                                            color="#FAF6F2"
                                            title="???????????????? ?? ??????????????"
                                            onChange={() => dispatch(addToCartItemsBox(productCard))}
                                        />
                                    </div>
                                </div>
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
ProductCardPage.propTypes = {
    productCard: PropTypes.object.isRequired
};
export default ProductCardPage;
