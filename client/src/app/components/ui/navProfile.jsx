import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData } from "../../store/users";
import styles from "./navProfile.module.scss";
const NavProfile = () => {
  const currentUser = useSelector(getCurrentUserData());
  if (!currentUser) return "Loading";
  return (
    <div className={styles.navProfile_avatar_wrapper}>
      <div className={styles.navProfile_avatarBox}>
        <img
          src={currentUser.image}
          alt="currentUser"
          className={styles.navProfile_avatar}
        />
      </div>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>ЛК</button>
        <div className={styles.dropdown_content}>
          <Link to={"/private"}>Личный Кабинет</Link>
          {currentUser.admin && <Link to={"/admin"}>Админка</Link>}
          <Link to={"/favourite"}>Избранное</Link>
          <Link to={"/cart"}>Корзина</Link>
          <Link to={"/logout"}>Выход</Link>
        </div>
      </div>
    </div>
  );
};

export default NavProfile;
