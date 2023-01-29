import React, { useState } from "react";
import AddComment from "../common/comments/addComment";
import CommentList from "../common/comments/commentList";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCurrentUserData, getIsLoggedIn, getUsersLoadingStatus } from "../../store/users";
import { addComment, getCommentsByPageId } from "../../store/comments";
import { nanoid } from "nanoid";
import Loader from "../common/loader";
import upPicture from "../../assets/icons/navigation/up.png";
import downPicture from "../../assets/icons/navigation/down.png";
import styles from "./comments.module.scss";

const Comments = () => {
    const { productId } = useParams();
    const [openComment, setOpenComment] = useState(false);
    const isLoggedIn = useSelector(getIsLoggedIn());
    const dispatch = useDispatch();
    const currentUserData = useSelector(getCurrentUserData());
    const commentsUser = useSelector(getCommentsByPageId(productId));
    const getOpenComment = () => {
        setOpenComment(prevState => !prevState);
    };
    // useEffect(() => {
    //     dispatch(loadCommentList(userID));
    // }, [userID]);
    const isLoading = useSelector(getUsersLoadingStatus());

    const handleSubmit = (commentData) => {
        dispatch(addComment({ ...commentData, pageId: productId, userId: currentUserData._id, created_at: Date.now(), _id: nanoid(), avatar: currentUserData.image, userName: currentUserData.name }));
    };
    const heandleRemove = (id) => {
        console.log(id);
        // dispatch(removeComment(id));
        // commentsUser.filter(comment => comment._id !== id);
    };
    const sortArray = _.orderBy(commentsUser, ["created_at"], ["desc"]);
    return (
        <div className={styles.comments_title}>
            {isLoggedIn && <AddComment onSubmit={handleSubmit} />}
            <div className={styles.comments_headerComment}>
                <h3>Комментарии</h3><button onClick={getOpenComment}><img className={styles.comments_headerComment_picture} src={openComment ? downPicture : upPicture} alt="up" /></button>
            </div>

            {
                openComment && <div>
                    {sortArray.length ? <div>
                        {sortArray.length > 0 && (!isLoading ? < CommentList comments={sortArray} onRemove={heandleRemove} /> : <Loader />)}
                    </div> : <h1 className={styles.comments_headerComment_noComments}>Комментариев пока нет.</h1>}

                </div>
            }

        </div >
    );
};

export default Comments;
