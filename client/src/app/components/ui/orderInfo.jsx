import React from "react";
import { useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getCurrentOrders, getOrders } from "../../store/cart";
import Footer from "../common/footer";
import HeaderMenu from "../common/headerMenu";
import styles from "./orderInfo.module.scss";
import { getIsLoggedIn } from "../../store/users";

const OrderInfo = () => {
    const { numorder } = useParams();
    const orders = useSelector(getCurrentOrders(numorder));
    const lastOrder = orders[orders.length - 1];
    const ordersAll = useSelector(getOrders());
    const isLogeddIn = useSelector(getIsLoggedIn());
    console.log(lastOrder);
    console.log(ordersAll);
    return (<div>
        <header>
            <HeaderMenu />
        </header>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.orderInfo}>
                    <h1 className={styles.orderInfo_title}>Заказы</h1>
                    <h1 className={styles.orderInfo_description}>Уважаемый {lastOrder.name}, ваш заказ №{lastOrder.numData} на сумму {lastOrder.sum} сформирован.</h1>
                    {isLogeddIn && <p className={styles.orderInfo_description}>Историю ваших заказов вы можете посмотреть в <NavLink to={"/private"}><span className={styles.orderInfo_description_private}>Личном кабинете</span></NavLink></p>}
                </div>
            </div>
        </div>
        <footer>
            <Footer />
        </footer>
    </div>);
};

export default OrderInfo;
