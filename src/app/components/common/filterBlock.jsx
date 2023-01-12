import React from "react";
import styles from "./filterBlock.module.scss";
import TextField from "./form/textField";
import SelectField from "./form/selectedField";
import CheckBoxField from "./form/checkBoxField";
import PropTypes from "prop-types";

const FilterBlock = ({ data, onChange, label, optionsCategory }) => {
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
                <SelectField label={label} labelClassName={styles.main_filterBlock_titlePrice} name="brands" value={data.brands} defaultOption="Выбирай брэнд" onChange={onChange} options={[
                    { name: "Metis Tattoo Machines(Россия)", value: "Metis Tattoo Machines" },
                    { name: "CNC(Китай)", value: "CNC" },
                    { name: "Foxxx Irons(Россия)", value: "Foxxx Irons" },
                    { name: "Мастерская точной механики(Россия)", value: "Мастерская точной механики" },
                    { name: "Mustang Tattoo(Россия)", value: "Mustang Tattoo" },
                    { name: "R.T.E.(Россия)", value: "R.T.E." },
                    { name: "Deuce Machines(Россия)", value: "Deuce Machines" },
                    { name: "Verge(Россия)", value: "Verge" },
                    { name: "Cyborg Machines(Россия)", value: "Cyborg Machines" }
                ]}/>
            </div>
            <div className={styles.main_filterBlock_item}>

                <CheckBoxField labelClassName={styles.main_filterBlock_titlePrice} name="inStock" value={data.inStock} onChange={onChange}><>Только в наличии</></CheckBoxField>
            </div>
            <div className={styles.main_filterBlock_item}>
                <SelectField label="Сортировка" labelClassName={styles.main_filterBlock_titlePrice} name="sort" value={data.sort} defaultOption="Сортировать по" onChange={onChange} options={[
                    { name: "Сначала дешевле", value: "priceDown" },
                    { name: "Сначала дороже", value: "priceUP" },
                    { name: "По наименованию", value: "name" },
                    { name: "Размер скидки", value: "sale" }
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
    goods: PropTypes.array

};
export default FilterBlock;
