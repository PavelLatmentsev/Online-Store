import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, getUsersLoadingStatus, loadUsersList } from "../../../store/users";
import PropTypes from "prop-types";
import { loadPromocodeList } from "../../../store/promocode";
import { loadCatalogList } from "../../../store/catalog";
import { loadLikeList } from "../../../store/favourite";
import { getOrdersList } from "../../../store/cart";
import { getCommentsList } from "../../../store/comments";
import { loadSubscribeList } from "../../../store/subscribe";
import { loadReviewList } from "../../../store/review";
const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const UsersStatusLoading = useSelector(getUsersLoadingStatus());
    useEffect(() => {
        dispatch((loadPromocodeList()));
        dispatch((loadCatalogList()));
        dispatch((loadLikeList()));
        dispatch(getCommentsList());
        dispatch(loadSubscribeList());
        dispatch(loadSubscribeList());
        dispatch(loadReviewList());
        if (isLoggedIn) {
            dispatch(loadUsersList());
            dispatch(getOrdersList());
        }
    }, [isLoggedIn]);
    if (UsersStatusLoading) return "Loading";
    return children;
};
AppLoader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
export default AppLoader;
