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

        <tr className={styles.rowProduct}>
            <td className={styles.tableItem_index + " " + styles.colProduct}><div>{index + 1}</div></td>
            {isBaseProdacts && <td className={styles.tableItem_id + " " + styles.colProduct}><TextField value={productData._id} type="text" name="_id" onChange={heandleChange} disabled={disabledItem} /></td>}
            <td className={styles.tableItem_name + " " + styles.colProduct}><TextField value={productData.name} type="text" name="name" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_price + " " + styles.colProduct}><TextField value={productData.price} type="text" name="price" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_sales + " " + styles.colProduct}><TextField value={productData.sales} type="text" name="sales" onChange={heandleChange} disabled={disabledItem} placeholder="Скидка" /></td>
            <td className={styles.tableItem_url + " " + styles.colProduct}><TextField value={productData.url} type="text" name="url" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_absent + " " + styles.colProduct}><CheckBoxField value={productData.absent} type="checkbox" name="absent" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_hit + " " + styles.colProduct}><CheckBoxField value={productData.hit} type="checkbox" name="hit" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_novelty + " " + styles.colProduct}><CheckBoxField value={productData.novelty} type="checkbox" name="novelty" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_promotion + " " + styles.colProduct}><CheckBoxField value={productData.promotion} type="checkbox" name="promotion" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_category + " " + styles.colProduct}><TextField value={productData.category} type="text" name="category" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_popular + " " + styles.colProduct}><CheckBoxField value={productData.popular} type="checkbox" name="popular" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_brands + " " + styles.colProduct}><TextField value={productData.brands} type="text" name="brands" onChange={heandleChange} disabled={disabledItem} /></td>
            <td className={styles.tableItem_btnBlock + " " + styles.colProduct}><button onClick={heandlerEditItem} className={styles.tableItem_editBtn}><img src={editIcon} alt="editIcon" /></button>
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
