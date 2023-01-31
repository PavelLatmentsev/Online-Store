import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "../form/textField";
import CheckBoxField from "../form/checkBoxField";
import editIcon from "../../../assets/icons/navigation/edit.png";
import delproduct from "../../../assets/icons/navigation/delproduct.png";
import updateIcon from "../../../assets/icons/navigation/update.png";
import styles from "./tableItem.module.scss";
import { useProducts } from "../../../hooks/useProducts";
const TableItem = ({ product, index, isBaseProdacts }) => {
    const [productData, setProductData] = useState(product);
    const [disabledItem, setDisabledItem] = useState(true);
    const { updateItem, addNewProduct, heandleDeleteItem } = useProducts();
    const heandlerEditItem = () => {
        setDisabledItem(prevState => !prevState);
    };
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
            <td className={styles.tableItem_index}><div>{index + 1}</div></td>
            <td className={styles.tableItem_id}><TextField value={productData._id} type="text" name="_id" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_name}><TextField value={productData.name} type="text" name="name" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_price}><TextField value={productData.price} type="text" name="price" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_sales}><TextField value={productData.sales} type="text" name="sales" onChange={heandleChange} disabled={disabledItem} placeholder="Скидка" /></td>
            <td className={styles.tableItem_url}><TextField value={productData.url} type="text" name="url" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_absent}><CheckBoxField value={productData.absent} type="text" name="absent" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_hit}><CheckBoxField value={productData.hit} type="text" name="hit" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_novelty}><CheckBoxField value={productData.novelty} type="text" name="novelty" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_promotion}><CheckBoxField value={productData.promotion} type="text" name="promotion" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_category}><TextField value={productData.category} type="text" name="category" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_popular}><CheckBoxField value={productData.popular} type="text" name="popular" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_brands}><TextField value={productData.brands} type="text" name="brands" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_btnBlock}><button onClick={heandlerEditItem} className={styles.tableItem_editBtn}><img src={editIcon} alt="editIcon" /></button>
                {!disabledItem ? <button onClick={isBaseProdacts ? () => updateItem(productData) : () => addNewProduct(productData)} className={styles.tableItem_updateBtn}><img src={updateIcon} alt="update" /></button> : null}
                {isBaseProdacts ? <button onClick={() => heandleDeleteItem(productData._id)} className={styles.tableItem_delBtn}><img src={delproduct} alt="delBtn" /></button> : null}
            </td>

        </tr >
    );
};
TableItem.propTypes = {
    product: PropTypes.object.isRequired,
    index: PropTypes.number,
    onClick: PropTypes.func,
    isBaseProdacts: PropTypes.bool
};
export default TableItem;