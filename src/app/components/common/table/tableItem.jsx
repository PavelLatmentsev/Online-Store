import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "../form/textField";
import CheckBoxField from "../form/checkBoxField";
import editIcon from "../../../assets/icons/navigation/edit.png";
import delproduct from "../../../assets/icons/navigation/delproduct.png";
import styles from "./tableItem.module.scss";
const TableItem = ({ product, index, onClick }) => {
    const [productData, setProductData] = useState(product);
    const [disabledItem, setDisabledItem] = useState(true);
    const heandlerDisabled = () => {
        setDisabledItem(prevState => !prevState);
    };
    console.log(productData);
    const heandleChange = (target) => {
        if (target) {
            setProductData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
        }
    };
    return (
        <tr>
            <td>{index}</td>
            <td><TextField value={productData._id} type="text" name="_id" onChange={heandleChange} disabled={disabledItem} /></td>
            <td><TextField value={productData.name} type="text" name="name" onChange={heandleChange} disabled={disabledItem} /></td>
            <td><TextField value={productData.price} type="text" name="price" onChange={heandleChange} disabled={disabledItem} /></td>
            <td><TextField value={productData.sales} type="text" name="sales" onChange={heandleChange} disabled={disabledItem} /></td>
            <td><TextField value={productData.url} type="text" name="url" onChange={heandleChange} disabled={disabledItem} /></td>
            <td><CheckBoxField value={productData.absent} type="text" name="absent" onChange={heandleChange} disabled={disabledItem} /></td>
            <td><CheckBoxField value={productData.hit} type="text" name="hit" onChange={heandleChange} disabled={disabledItem} /></td>
            <td><CheckBoxField value={productData.novelty} type="text" name="novelty" onChange={heandleChange} disabled={disabledItem} /></td>
            <td><CheckBoxField value={productData.promotion} type="text" name="promotion" onChange={heandleChange} disabled={disabledItem} /></td>
            <td><TextField value={productData.category} type="text" name="category" onChange={heandleChange} disabled={disabledItem} /></td>
            <td><CheckBoxField value={productData.popular} type="text" name="popular" onChange={heandleChange} disabled={disabledItem} /></td>
            <td><TextField value={productData.brands} type="text" name="brands" onChange={heandleChange} disabled={disabledItem} /></td>
            <td><button onClick={heandlerDisabled} className={styles.tableItem_editBtn}><img src={editIcon} alt="editIcon" /></button> <button onClick={() => onClick(productData._id)} className={styles.tableItem_delBtn}><img src={delproduct} alt="delBtn" /></button></td>

        </tr>
    );
};
TableItem.propTypes = {
    product: PropTypes.object.isRequired,
    index: PropTypes.number,
    onClick: PropTypes.func
};
export default TableItem;
