import React from "react";
import styles from "./comment.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserData, getIsLoggedIn } from "../../../store/users";
import displayDate from "../../../utils/displayDate";
import editComment from "../../../assets/icons/navigation/edit.png";
import delComment from "../../../assets/icons/navigation/delproduct.png";
import updateComment from "../../../assets/icons/navigation/update.png";
import { removeComment } from "../../../store/comments";
const Comment = ({ comment }) => {
    const currentUserData = useSelector(getCurrentUserData());
    console.log("currentUserData", currentUserData);
    const editComments = currentUserData ? currentUserData._id === comment.userId : false;

    const isLogeddIn = useSelector(getIsLoggedIn());
    const dispatch = useDispatch();
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
                        <button className={styles.comment_imageBlock_btn}><img src={editComment} alt="editComment" /></button>
                        <button className={styles.comment_imageBlock_btn}><img src={updateComment} alt="updateComment" /></button>
                        <button className={styles.comment_imageBlock_btn} onClick={() => dispatch(removeComment(comment._id))}><img src={delComment} alt="delete" /></button>
                    </div>}

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
    </div >);
};
Comment.propTypes = {
    comment: PropTypes.object.isRequired
};
export default Comment;
