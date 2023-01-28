import React, { useState } from "react";
import PropTypes from "prop-types";

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
        <div>
            <form action="" onSubmit={heandleSubmit}>
                <div>
                    <h2>New Comment</h2>
                </div>
                <TextAreaField
                    label="Сообщение"
                    value={commentData.textContent || ""}
                    name="textContent"
                    onChange={handleChange}
                    error={errors.content}
                />
                <div className="">
                    <button className="">
                        Добавить коментарий
                    </button>
                </div>
            </form>
        </div>
    );
};

AddComment.propTypes = {
    onSubmit: PropTypes.func
};

export default AddComment;
