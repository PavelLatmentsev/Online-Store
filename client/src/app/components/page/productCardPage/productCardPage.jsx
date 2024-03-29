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
import { addToCartItemsBox } from "../../../store/cart";
import { addLike, getLikeStatus } from "../../../store/favourite";
import Loader from "../../common/loader";
import { getCurrentUserData, getIsLoggedIn } from "../../../store/users";
import Comments from "../../ui/comments";
import Breadcrumps from "../../common/breadcrumps";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { useProducts } from "../../../hooks/useProducts";
import ProductCard from "../../common/goods/productCard";
import { Link } from "react-router-dom";

const ProductCardPage = ({ productCard }) => {
  const { products } = useProducts();
  const likeGoods = products.filter(item => item.category === productCard.category);
  const likeBrands = products.filter(item => item.brands === productCard.brands);
  const dispatch = useDispatch();
  const liked = useSelector(getLikeStatus(productCard._id)) || false;
  const currentUserData = useSelector(getCurrentUserData());
  const isLoggedIn = useSelector(getIsLoggedIn());
  const priceWithSales =
    productCard.price -
    (productCard.sales ? productCard.sales * productCard.price : null);
  const [countProduct, setCountProduct] = useState(0);
  const addToCartItem = () => {
    setCountProduct((prevState) => prevState + 1);
  };
  const removeFromCartItem = () => {
    return countProduct ? setCountProduct((prevState) => prevState - 1) : 0;
  };
  const addProductsToCart = () => {
    if (countProduct) {
      dispatch(addToCartItemsBox({ ...productCard, quantity: countProduct }));
      setCountProduct(0);
    }
  };

  const pictureBox = { sales, hit, novelty, promotion, absent };
  const productBox = {
    sales: productCard.sales,
    hit: productCard.hit,
    promotion: productCard.promotion,
    novelty: productCard.novelty,
    absent: productCard.absent
  };
  const filtredBox = [];
  for (const item in productBox) {
    if (productBox[item]) {
      filtredBox.push(item);
    }
  }
  const first = filtredBox[Math.floor(Math.random() * filtredBox.length)];
  const newBox = filtredBox.filter((item) => item !== first);
  const second = newBox[Math.floor(Math.random() * filtredBox.length)];
  return (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {productCard ? (
            <div className={styles.productCardPage}>
              {productCard ? (
                <div className={styles.BreadCrumps}>
                  <Breadcrumps product={productCard} />
                </div>
              ) : (
                <Loader />
              )}
              ;
              <div className={styles.productCardPage_header}>
                <div className={styles.productCardPage_header_imageBlock}>
                  <img
                    src={productCard.url}
                    alt="productCard"
                    className={styles.productCardPage_header_imageBlock_img}
                  />
                  {productBox[first] && (
                    <img
                      src={pictureBox[first]}
                      alt="promotion"
                      className={styles.productCardPage_header_imageBlock_marks}
                    />
                  )}
                  {productBox[second] && (
                    <img
                      src={pictureBox[second]}
                      alt="promotion"
                      className={
                        styles.productCardPage_header_imageBlock_marks +
                        " " +
                        styles.secondMarksPosition
                      }
                    />
                  )}
                  {isLoggedIn ? (
                    <button
                      className={styles.productCardPage_header_imageBlock_btn}
                      onClick={() =>
                        dispatch(
                          addLike({
                            ...productCard,
                            userId: currentUserData ? currentUserData._id : ""
                          })
                        )
                      }
                    >
                      <img
                        src={liked.likeStatus ? like : unlike}
                        alt="favorite"
                      />
                    </button>
                  ) : (
                    ""
                  )}
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
                        {productCard.sales ? priceWithSales : productCard.price}{" "}
                        ₽
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
                        Наличие: Много
                      </span>
                    </div>
                    <p
                      className={
                        styles.productCardPage_header_descriptionBlock_description
                      }
                    >
                      Описание
                    </p>
                    <p
                      className={
                        styles.productCardPage_header_descriptionBlock_description
                      }
                    >
                      Viper - машинка собрана на мощном моторе, рама данной
                      модели сделана из прочного и лёгкого алюминиевого сплава.
                      В связи с этим вес данной машины всего 120 грамм
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
                      onClick={removeFromCartItem}
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
                        // onChange={heandleChange}
                        name="productPrice"
                        value={countProduct}
                      />
                    </div>

                    <button
                      className={
                        styles.productCardPage_header_descriptionBlock_increment
                      }
                      onClick={addToCartItem}
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
                        title="Добавить в корзину"
                        onChange={addProductsToCart}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.commentList_wrapper}>
                <Comments />
              </div>
            </div>
          ) : (
            <Loader />
          )}
           <div className={styles.productCardPage_likeGoods}>
            <div className={styles.productCardPage_likeGoods_title}> <h1 className={styles.productCardPage_likeGoods_titleHeader}>Похожие товары</h1> <Link to={`/catalog/${productCard.category}`} className={styles.productCardPage_likeGoods_titleLink}> Смотреть все</Link></div>

           <Swiper
                spaceBetween={1}
                slidesPerView={4}
                centeredSlides={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                navigation={false}
                modules={[Autoplay]}
                className="mySwiper"
                      >
                {likeGoods ? (
                  likeGoods.map((item, index) => (

                        <SwiperSlide key={index + " " + productCard.name }>
                          <ProductCard product = {item}/>
                        </SwiperSlide>
                  ))
                ) : (
                  <Loader />
                )}
                        </Swiper>
              </div>
              <div className={styles.productCardPage_likeGoods}>
            <div className={styles.productCardPage_likeGoods_title}> <h1 className={styles.productCardPage_likeGoods_titleHeader}>Товары этого бренда</h1> <Link to={"/catalog/allgoods"} className={styles.productCardPage_likeGoods_titleLink}> Смотреть все</Link></div>

           <Swiper
                spaceBetween={1}
                slidesPerView={4}
                centeredSlides={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                navigation={false}
                modules={[Autoplay]}
                className="mySwiper"
                      >
                {likeBrands ? (
                  likeBrands.map((item, index) => (

                        <SwiperSlide key={index + " " + productCard.brands }>
                          <ProductCard product = {item}/>
                        </SwiperSlide>
                  ))
                ) : (
                  <Loader />
                )}
                        </Swiper>
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
  productCard: PropTypes.object
};
export default ProductCardPage;
