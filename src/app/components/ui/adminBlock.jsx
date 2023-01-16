import React from "react";
import { useProducts } from "../../hooks/useProducts";
import Footer from "../common/footer";
import HeaderMenu from "../common/headerMenu";
import styles from "./adminBlock.module.scss";
import TableItem from "../common/table/tableItem";

const AdminBlock = () => {
    const { products, heandleDeleteItem } = useProducts();

    return (<div>
        <header>
            <HeaderMenu />
        </header>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.adminBlock}>
                    <h1 className={styles.adminBlock_title}>База товаров</h1>
                    <div className={styles.adminBlock}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Номер</th>
                                    <th>id</th>
                                    <th>Наименование</th>
                                    <th>Цена</th>
                                    <th>Скидка</th>
                                    <th>URL</th>
                                    <th>Наличие</th>
                                    <th>Хит</th>
                                    <th>Новинка</th>
                                    <th>Акция</th>
                                    <th>Категория</th>
                                    <th>Популярный</th>
                                    <th>Брэнд</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <TableItem product={product} key={product._id} index={index} onClick={heandleDeleteItem} />
                                ))};

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
        <footer>
            <Footer />
        </footer>
    </div>);
};

export default AdminBlock;
