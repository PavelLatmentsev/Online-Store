import React from "react";
import styles from "./comment.module.scss";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../../store/users";
import displayDate from "../../../utils/displayDate";
const Comment = ({ comment }) => {
    const currentUserData = useSelector(getCurrentUserData());
    return (<div className={styles.comment}>

        <div className={styles.comment_content}>
            <div className={styles.comment_personalCommentInfo}>
                <div className={styles.comment_imageBlock}>
                    <div>
                        <img src={currentUserData.image} alt="avatar" className={styles.comment_imageBlock_picture} />
                    </div>
                    <span>{currentUserData.name}</span>
                </div>
                <span>{displayDate(comment.created_at)}</span>
            </div>
            <div className={styles.comment_content_description}>
                Коменнтарий:
                <p className={styles.comment_content_descriptionBox}>
                    {comment.textContent}
                </p>
            </div>
        </div>
    </div>);
};
Comment.propTypes = {
    comment: PropTypes.object.isRequired
};
export default Comment;
