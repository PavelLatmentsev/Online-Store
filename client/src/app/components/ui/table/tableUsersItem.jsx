import React, { useState } from "react";
import PropTypes from "prop-types";
import CheckBoxField from "../../common/form/checkBoxField";
import editIcon from "../../../assets/icons/navigation/edit.png";
import delproduct from "../../../assets/icons/navigation/delproduct.png";
import updateIcon from "../../../assets/icons/navigation/update.png";
import styles from "./tableUsersItem.module.scss";
import { useDispatch } from "react-redux";
import { removeUser, updateUser } from "../../../store/users";
import { addManager } from "../../../store/manager";
const TableUsersItem = ({ user, index }) => {
    const dispatch = useDispatch();
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
    const getUpdateUser = (userData) => {
        dispatch(updateUser(userData));
        setDisabledItem(true);
        if (userData.manager) {
            dispatch(addManager({ name: userData.name, email: userData.email, image: userData.image, phone: userData.phone, manager: userData.manager }));
        }
    };
    return (
        <tr className={styles.row}>
            <td className={styles.tableItem_index + " " + styles.col}><div>{index + 1}</div></td>
            <td className={styles.tableItem_avatar + " " + styles.col}><img src={user.image} alt="users" className={styles.tableItem_userPic}/></td>
            <td className={styles.tableItem_name + " " + styles.col}>{user.name}</td>
            <td className={styles.tableItem_email + " " + styles.col}>{user.email}</td>
            <td className={styles.tableItem_admin + " " + styles.col}><CheckBoxField value={userData.admin} type="checkbox" name="admin" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_manager + " " + styles.col}><CheckBoxField value={userData.manager} type="checkbox" name="manager" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_btnBlock + " " + styles.col}>
            <button onClick={heandlerEditItem} className={styles.tableItem_delBtn}><img src={editIcon} alt="editIcon" /></button>
            {!disabledItem && <button onClick={() => getUpdateUser(userData)} className={styles.tableItem_delBtn}><img src={updateIcon} alt="updateIcon" /></button>}
            <button onClick={() => dispatch(removeUser(user._id))} className={styles.tableItem_delBtn}><img src={delproduct} alt="delproduct" /></button>
            </td>
        </tr >
    );
};
TableUsersItem.propTypes = {
    user: PropTypes.object.isRequired,
    index: PropTypes.number,
    onClick: PropTypes.func
};
export default TableUsersItem;
