import React from "react";
import styles from "./tableUsersHeader.module.scss";
const TableUsersHeader = () => {
    return (<thead className={styles.tableHeader}>
        <tr className={styles.tableHeader_row}>
            <th className={styles.tableHeader_col}>Номер</th>
            <th className={styles.tableHeader_col}>Фото</th>
            <th className={styles.tableHeader_col}>ФИО</th>
            <th className={styles.tableHeader_col}>Почта</th>
            <th className={styles.tableHeader_col}>Администратор</th>
            <th className={styles.tableHeader_col}>Менеджер</th>
            <th className={styles.tableHeader_col}>Редактировать</th>
        </tr>
    </thead>);
};
export default TableUsersHeader;
