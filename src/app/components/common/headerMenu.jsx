import React, { useState } from "react";
import styles from "./headerMenu.module.scss";
import Call from "../../assets/icons/navigation/Call.png";
import Mail from "../../assets/icons/navigation/Mail.png";
import DevideLogo from "../../assets/icons/navigation/DevideLogo.png";
import Box from "../../assets/icons/navigation/Box.png";
import Heart from "../../assets/icons/navigation/Heart.png";
import Person from "../../assets/icons/navigation/Person.png";
import Dividers from "../../assets/icons/navigation/dividers.png";
import BurgerMenu from "../../assets/icons/navigation/BurgerMenu.png";
import TextField from "./form/textField";
import NavBar from "../ui/navBar";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuantityGoods, getTotalSum } from "../../store/cart";
import { useProducts } from "../../hooks/useProducts";
import { searchResultBox } from "../../store/search";

const HeaderMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const heandleSearch = (target) => {
    setSearchValue(target.value);
  };
  const totalSum = useSelector(getTotalSum());
  const totalGoods = useSelector(getQuantityGoods());
  const { products } = useProducts();
  const heandleSearchResult = (e, dataSearch) => {
    if (e.keyCode === 13) {
      const searchProducts = dataSearch ? products.filter((product) => product.name.trim().toLowerCase().split(" ").join("").indexOf(dataSearch.trim().toLowerCase().split(" ").join("")) !== -1) : [];
      dispatch(searchResultBox(searchProducts));
      history.push("/searchresult");
      return searchProducts;
    }
  };
  const searchList = searchValue ? products.filter((product) => product.name.trim().toLowerCase().split(" ").join("").indexOf(searchValue.trim().toLowerCase().split(" ").join("")) !== -1) : [];
  return (
    <div className={styles.header_box}>
      <div className={styles.container}>
        <div className={styles.header_top}>
          <div className={styles.header_top_wrapper}>
            <div className={styles.header_top_social}>
              <div className={styles.header_top_social_item}>
                <img src={Call} alt="Call" className={styles.header_top_social_item_img} />
                <span className={styles.header_top_social_item_phone}>+7952 552-52-52</span>
              </div>
              <ul className={styles.header_top_social_network}>
                <li> <a href="#" id="part1" className={styles.header_nav_item}>Viber</a></li>
                <li><a href="#" className={styles.header_nav_item}>Whats App</a></li>
                <li><a href="#" className={styles.header_nav_item}>Telegram</a></li>
              </ul>
            </div>
            <div className={styles.header_top_mail}>
              <img src={Mail} alt="Mail" className={styles.header_top_mail_img} />
              <span className={styles.header_top_mail_post}>Mr.Driskell@mail.ru</span>
            </div>
          </div>

          <div className={styles.header_top_logo}>
            <NavLink to={"/"}>
              <div className={styles.header_top_logo_name}>MR. DRISKELL</div>
              <div>
                <img src={DevideLogo} alt="DevideLogo" className={styles.header_top_logo_divider} />
              </div>
              <div className={styles.header_top_logo_shop}>TATTOO SHOP</div></NavLink>
          </div>

          <div className={styles.header_top_basket}>
            <span className={styles.header_top_basket_sum}>{totalSum} ???</span>
            <NavLink to={"/cart"}><div className={styles.header_top_basket_imgBtn_wrapper}><button className={styles.header_top_basket_imgBtn}>
              <img src={Box} alt="Box" className={styles.header_top_basket_img} />
              <p className={styles.header_top_basket_totalGoods}>{totalGoods}</p>
              </button></div></NavLink>
              <NavLink to={"/favourite"}><button className={styles.header_top_basket_likeBtn}><img src={Heart} alt="favourite" className={styles.header_top_basket_like} /></button></NavLink>
            <button className={styles.header_top_basket_personBtn}><img src={Person} alt="Person" className={styles.header_top_basket_person} /></button>
          </div>
        </div>
        <div className={styles.header_dividers}>
          <img src={Dividers} alt="Dividers" />
        </div>
        <div className={styles.header_bottom}>
          <div className={styles.header_bottom_burger}>
            <span className={styles.header_bottom_burger_description}>??????????????</span>
            <img src={BurgerMenu} alt="BurgerMenu" className={styles.header_bottom_burger_img} />
          </div>
          <div className={styles.header_bottom_search}>
            <div className={styles.header_bottom_search_parrent}>
            <TextField
              type="text"
              name="search"
              onChange={heandleSearch}
              value={searchValue}
              className={styles.header_bottom_search_item}
              placeholder="??????????"
              onKeyDown = { () => heandleSearchResult(event, searchValue) }
            />
            </div>
            <div className={searchValue ? styles.header_bottom_search_result : ""}>
                <ul className={styles.header_bottom_search_resultList}>
                    {searchList.map(item => <NavLink to={`/catalog/${item.category}/${item._id}`} key={item._id}><li className={styles.header_bottom_search_resultList_item}>{item.name}</li></NavLink>)}
                </ul>
              </div>
          </div>
            <NavBar className={styles.header_bottom_navbar} />
          </div>
        </div>
      </div>
  );
};

export default HeaderMenu;
