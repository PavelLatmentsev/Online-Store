import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, getUsersLoadingStatus, loadUsersList } from "../../../store/users";
import PropTypes from "prop-types";
import { loadPromocodeList } from "../../../store/promocode";
import { loadCatalogList } from "../../../store/catalog";
const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const UsersStatusLoading = useSelector(getUsersLoadingStatus());
    useEffect(() => {
        dispatch((loadPromocodeList()));
        dispatch((loadCatalogList()));
        if (isLoggedIn) {
            dispatch(loadUsersList());
        }
    }, [isLoggedIn]);
    if (UsersStatusLoading) return "Loading";
    return children;
};
AppLoader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
export default AppLoader;
