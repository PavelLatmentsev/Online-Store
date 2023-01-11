import React from "react";
import styles from "./filterBlock.module.scss";
import TextField from "./form/textField";
import SelectField from "./form/selectedField";
import CheckBoxField from "./form/checkBoxField";
import PropTypes from "prop-types";
import _ from "lodash";
const FilterBlock = ({ data, onChange, label, optionsCategory, goods }) => {
const sortGoods = _.orderBy(goods, )
    return (
        <div className={styles.main_filterBlock}>
            <div className={styles.main_filterBlock_item}>
                <label htmlFor="priceFieldMin" className={styles.main_filterBlock_titlePrice}>Цена:</label>
                <label htmlFor="priceFieldMin" className={styles.main_filterBlock_titlePrice}>от:</label>
                <div>
                    <TextField type="text" name="priceFieldMin" value={data.priceFieldMin} id="#priceFieldMin" onChange={onChange} className={styles.main_filterBlock_input} />
                </div>
                <label htmlFor="priceFieldMax" className={styles.main_filterBlock_titlePrice}>до:</label>
                <div>
                    <TextField type="text" name="priceFieldMax" value={data.priceFieldMax} id="#priceFieldMax" onChange={onChange} className={styles.main_filterBlock_input} />
                </div>
            </div>
            <div className={styles.main_filterBlock_item}>
                <SelectField label={label} labelClassName={styles.main_filterBlock_titlePrice} name="typeOfNeedles" value={data.typeOfNeedles} onChange={onChange} options={optionsCategory}/>
            </div>
            <div className={styles.main_filterBlock_item}>

                <CheckBoxField labelClassName={styles.main_filterBlock_titlePrice} name="inStock" value={data.inStock} onChange={onChange}><>Только в наличии</></CheckBoxField>
            </div>
            <div className={styles.main_filterBlock_item}>
                <SelectField label="Сортировка" labelClassName={styles.main_filterBlock_titlePrice} name="Sort" value={data.sort} onChange={onChange} options={[
                    { name: "Сначала дешевле", value: "male" },
                    { name: "Сначала дороже", value: "female" },
                    { name: "По наименованию", value: "other" },
                    { name: "Размер скидки", value: "other" }
                ]}/>
            </div>
        </div>
    );
};
FilterBlock.propTypes = {
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    optionsCategory: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    goods: PropTypes.array.isRequired

};
export default FilterBlock;
