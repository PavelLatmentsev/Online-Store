import React from "react";
import styles from "./tableHeader.module.scss";
import PropTypes from "prop-types";
const TableHeader = ({ isBaseProdacts }) => {
    return (<thead className={styles.tableHeader}>
        <tr className={styles.tableHeader_row}>
            <th className={styles.tableHeader_rowItem}>Номер</th>
           {isBaseProdacts && <th className={styles.tableHeader_rowItem}>id</th> }
            <th className={styles.tableHeader_rowItem}>Наименование</th>
            <th className={styles.tableHeader_rowItem}>Цена</th>
            <th className={styles.tableHeader_rowItem}>Скидка</th>
            <th className={styles.tableHeader_rowItem}>URL</th>
            <th className={styles.tableHeader_rowItem}>Наличие</th>
            <th className={styles.tableHeader_rowItem}>Хит</th>
            <th className={styles.tableHeader_rowItem}>Новинка</th>
            <th className={styles.tableHeader_rowItem}>Акция</th>
            <th className={styles.tableHeader_rowItem}>Категория</th>
            <th className={styles.tableHeader_rowItem}>Популярный</th>
            <th className={styles.tableHeader_rowItem}>Профессиональный</th>
            <th className={styles.tableHeader_rowItem}>Билдеры</th>
            <th className={styles.tableHeader_rowItem}>Стартовый</th>
            <th className={styles.tableHeader_rowItem}>Брэнд</th>
            <th className={styles.tableHeader_rowItem}></th>
        </tr>
    </thead>);
};
TableHeader.propTypes = {
    isBaseProdacts: PropTypes.bool
};
export default TableHeader;
