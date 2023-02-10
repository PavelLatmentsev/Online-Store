import React from "react";
import styles from "./tableUsersHeader.module.scss";
const TableUsersHeader = () => {
    return (<thead className={styles.tableHeader}>
        <tr>
            <th>Номер</th>
            <th>Фото</th>
            <th>ФИО</th>
            <th>Почта</th>
            <th>Администратор</th>
            <th>Менеджер</th>
            <th>Редактировать</th>
        </tr>
    </thead>);
};
export default TableUsersHeader;
