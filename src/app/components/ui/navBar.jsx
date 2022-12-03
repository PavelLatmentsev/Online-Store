import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navBar.module.scss";
import PropTypes from "prop-types";
const NavBar = ({ className }) => {
    return (<nav className ={styles.top_menu}>

        <ul className={className}>
            <li>
                <NavLink to={"/promocodes"}>Промокоды</NavLink>
            </li>
            <li>
                <NavLink to={"/sales"} >Скидки</NavLink>
            </li>
            <li >
                <NavLink to={"/help"}>Помощь</NavLink>
            </li>
            <li >
                <NavLink to={"/about"} >О нас</NavLink>
            </li>
            <li>
                <NavLink to={"/contacts"} >Контакты</NavLink>
            </li>
        </ul>
</nav>);
};
NavBar.propTypes = {
    className: PropTypes.string
  };

export default NavBar;
