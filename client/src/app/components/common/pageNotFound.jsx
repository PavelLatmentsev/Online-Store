import React from "react";
import styles from "./pageNotFound.module.scss";
import NavButton from "../common/uniButton";
import SeeInCatalogBtn from "../common/seeInCatalogBtn";
import Page404 from "../../assets/background/404.png";
import { Link } from "react-router-dom";
import HeaderMenu from "./headerMenu";
import Footer from "./footer";
const PageNotFound = () => {
    return (
        <div>
            <header>
                <HeaderMenu />
            </header>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.notFoundPage}>
                        <div className={styles.notFoundPage_left}>
                            <h1 className={styles.notFoundPage_left_title}>Ошибка 404!</h1>
                            <p className={styles.notFoundPage_left_description}>Эта страница не найдена, мы уже работаем, чтобы ее восстановить!</p>
                            <div className={styles.notFoundPage_left_buttonWrapper} >
                                <div className={styles.notFoundPage_left_buttonWrapper_uniButton}>
                                    <Link to={"/"}><NavButton fill="#524336" color="#FAF6F2" title=" На главную" /></Link>
                                </div>
                                <div className={styles.notFoundPage_left_buttonWrapper_backToCatalog}>
                                    <Link to={"/catalog"}><SeeInCatalogBtn title="Вернуться в каталог" /></Link>
                                </div>
                            </div>

                        </div>
                        <div className={styles.notFoundPage_right}>
                            <img src={Page404} alt="Page404" />
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>);
};

export default PageNotFound;
