import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./addComment.module.scss";

import { validator } from "../../../utils/validator";
import TextAreaField from "../form/textAreaField";
const AddComment = ({ onSubmit }) => {
    const [commentData, setCommentData] = useState({
        textContent: ""
    });
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setCommentData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        content: {
            isRequired: { message: "Поле не должно быть пустым" }
        }
    };
    const validate = () => {
        const errors = validator(commentData, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const heandleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        onSubmit(commentData);
        setCommentData({ textContent: "" });
    };
    return (
        <div className={styles.addForm}>
            <form action="" onSubmit={heandleSubmit}>
                <div className={styles.addForm_header} >
                    <h2 className={styles.addForm_title}>Отзывы</h2>
                </div>
                <TextAreaField
                    label="Оставить отзыв"
                    value={commentData.textContent || ""}
                    name="textContent"
                    onChange={handleChange}
                    error={errors.content}
                />
                <div >
                    <button className={styles.addForm_button + " " + styles.custom_btn} ><span>Добавить</span><span>Отзыв</span></button>
                </div>
            </form >
        </div >
    );
};

AddComment.propTypes = {
    onSubmit: PropTypes.func
};

export default AddComment;
