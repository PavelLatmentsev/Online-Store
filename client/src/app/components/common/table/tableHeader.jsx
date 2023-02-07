import React from "react";
import styles from "./tableHeader.module.scss";
import PropTypes from "prop-types";
const TableHeader = ({ isBaseProdacts }) => {
    return (<thead className={styles.tableHeader}>
        <tr>
            <th>Номер</th>
           {isBaseProdacts && <th>id</th> }
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
TableHeader.propTypes = {
    isBaseProdacts: PropTypes.bool
};
export default TableHeader;
