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
import TextField from "../common/form/textField";
import NavBar from "./navBar";
const HeaderMenu = () => {
  const [searchValue, setSearchValue] = useState("");
  const heandleSearch = (target) => {
    setSearchValue(target.value);
  };

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
            {" "}
            <div className={styles.header_top_logo_name}>MR. DRISKELL</div>
            <div>
              <img src={DevideLogo} alt="DevideLogo" className={styles.header_top_logo_divider} />
            </div>
            <div className={styles.header_top_logo_shop}>TATTOO SHOP</div>
          </div>

          <div className={styles.header_top_basket}>
            <span className={styles.header_top_basket_sum}>37 280 ₽</span>
            <img src={Box} alt="Box" className={styles.header_top_basket_img} />
            <img src={Heart} alt="Heart" className={styles.header_top_basket_like} />
            <img src={Person} alt="Person" className={styles.header_top_basket_person} />
          </div>
        </div>
        <div className={styles.header_dividers}>
          <img src={Dividers} alt="Dividers" />
        </div>
        <div className={styles.header_bottom}>
          <div className={styles.header_bottom_burger}>
            <span className={styles.header_bottom_burger_description}>Каталог</span>
            <img src={BurgerMenu} alt="BurgerMenu" className={styles.header_bottom_burger_img} />
          </div>
          <div className={styles.header_bottom_search}>
            <TextField
              type="text"
              name="search"
              onChange={heandleSearch}
              value={searchValue}
              className={styles.header_bottom_search_item}
              placeholder="Поиск"
            />
          </div>
          <div >
            <NavBar className={styles.header_bottom_navbar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
