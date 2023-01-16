import React from "react";
import styles from "./tableHeader.module.scss";
const TableHeader = () => {
    return (<thead className={styles.tableHeader}>
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
    </thead>);
};

export default TableHeader;
