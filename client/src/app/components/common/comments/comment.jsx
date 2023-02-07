import React, { useState } from "react";
import styles from "./comment.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserData, getIsLoggedIn } from "../../../store/users";
import displayDate from "../../../utils/displayDate";
// import editComment from "../../../assets/icons/navigation/edit.png";
// import delComment from "../../../assets/icons/navigation/delproduct.png";
// import updateComment from "../../../assets/icons/navigation/update.png";
import { removeComment, updateCommentData } from "../../../store/comments";
import TextAreaField from "../form/textAreaField";
import { validator } from "../../../utils/validator";
const Comment = ({ comment }) => {
    const currentUserData = useSelector(getCurrentUserData());
    const editComments = currentUserData ? currentUserData._id === comment.userId : false;
    const isLogeddIn = useSelector(getIsLoggedIn());
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [errors, setErrors] = useState({});
    const [editData, setEditData] = useState({
        textContent: comment.textContent
    });
    const validatorConfig = {
        textContent: {
            isRequired: { message: "Поле не должно быть пустым" }
        }
    };
    const validate = () => {
        const errors = validator(editData, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleChange = (target) => {
        setEditData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const heandleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(updateCommentData({ ...comment, textContent: editData.textContent }));
        setEdit(false);
    };

    const heandleEditComment = () => {
        setEdit(prevState => !prevState);
    };
    return (<div className={styles.comment}>

        <div className={styles.comment_content}>
            <div className={styles.comment_personalCommentInfo}>
                <div className={styles.comment_imageBlock}>
                    <div className={styles.comment_imageBlock_item}>
                        <div>
                            <img src={comment.avatar} alt="avatar" className={styles.comment_imageBlock_picture} />

                        </div>
                        <span>{comment.name}</span>
                    </div>
                    {isLogeddIn && editComments && < div >
                        <button className={styles.comment_imageBlock_btn + " " + styles.custom_btn} onClick={() => heandleEditComment(comment)}>Редактировать</button>
                        <button className={styles.comment_imageBlock_btn + " " + styles.custom_btn} onClick={() => dispatch(removeComment(comment._id))}>Удалить</button>
                    </div>}

                </div>
                <span>{displayDate(comment.created_at)}</span>
            </div>
            <div className={styles.comment_content_description}>
                Коменнтарий:
                {edit ? <form onSubmit={heandleSubmit}>
                    <TextAreaField
                        label="Оставить отзыв"
                        value={editData.textContent}
                        name="textContent"
                        onChange={handleChange}
                        error={errors.textContent} />
                    <button className={styles.comment_imageBlock_btn + " " + styles.custom_btn}>Обновить</button>
                </form> : <p className={styles.comment_content_descriptionBox}>{comment.textContent}</p>}
            </div>
        </div>
    </div >);
};
Comment.propTypes = {
    comment: PropTypes.object.isRequired
};
export default Comment;
