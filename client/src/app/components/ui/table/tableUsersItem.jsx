import React, { useState } from "react";
import PropTypes from "prop-types";
import CheckBoxField from "../../common/form/checkBoxField";
import delproduct from "../../../assets/icons/navigation/delproduct.png";
import styles from "./tableUsersItem.module.scss";
const TableUsersItem = ({ user, index }) => {
    const [userData, setUserData] = useState(user);
    const [disabledItem, setDisabledItem] = useState(true);
    const heandlerEditItem = () => {
        setDisabledItem(prevState => !prevState);
    };
    const heandleChange = (target) => {
        if (target) {
            setUserData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
        }
    };
    return (
        <tr>
            <td className={styles.tableItem_index}><div>{index + 1}</div></td>
            <td className={styles.tableItem_avatar}><img src={user.image} alt="users" className={styles.tableItem_userPic}/></td>
            <td className={styles.tableItem_name}>{user.name}</td>
            <td className={styles.tableItem_email}>{user.email}</td>
            <td className={styles.tableItem_admin}><CheckBoxField value={userData.admin} type="checkbox" name="absent" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_manager}><CheckBoxField value={userData.manager} type="checkbox" name="hit" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_btnBlock}><button onClick={heandlerEditItem} className={styles.tableItem_delBtn}><img src={delproduct} alt="editIcon" /></button></td>
        </tr >
    );
};
TableUsersItem.propTypes = {
    user: PropTypes.object.isRequired,
    index: PropTypes.number,
    onClick: PropTypes.func
};
export default TableUsersItem;
