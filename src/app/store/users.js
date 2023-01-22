import authService from "../service/auth.service";
import localStorageService from "../service/localStorage.service";
import userService from "../service/user.service";
import { generateAuthError } from "../utils/generateAuthError";
import history from "../utils/history";

const { createSlice, createAction } = require("@reduxjs/toolkit");
const initialState = localStorageService.getAccesToken() ? {
    entities: [],
    isLoading: true,
    error: null,
    auth: { userId: localStorageService.getUserId() },
    isLoggedIn: false,
    dataLoaded: false

} : {
    entities: [],
    isLoading: false,
    error: null,
    auth: null,
    isLoggedIn: false,
    dataLoaded: false
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        authRequestedSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        usersRequested: (state) => {
            state.isLoading = true;
        },
        usersRecived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        usersRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        authRequestedFailed: (state, action) => {
            state.error = action.payload;
        },
        authRequested: (state) => {
            state.error = null;
        },
        userLoggedOut: (state) => {
            state.entities = null;
            state.isLoggedIn = false;
            state.auth = null;
            state.dataLoaded = false;
        },
        userUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex((u) => u._id === action.payload._id)
            ] = action.payload;
        }
    }
});

const { reducer: usersReducer, actions } = usersSlice;
const { userCreated, authRequestedSuccess, authRequestedFailed, userLoggedOut, usersRequested, usersRecived, usersRequestFailed, userUpdateSuccessed } = actions;

const userCreateRequested = createAction("users/userCreateRequested");
const userCreateFailed = createAction("users/userCreateFailed");
const authRequested = createAction("users/authRequested");
const userUpdateRequested = createAction("users/userUpdateRequested");
const userUpdateFailed = createAction("users/userUpdateFailed");
export const updateUser = (payload) => async (dispatch) => {
    dispatch(userUpdateRequested());
    try {
        const { content } = await userService.update(payload);
        dispatch(userUpdateSuccessed(content));
    } catch (error) {
        dispatch(userUpdateFailed(error.message));
    }
};

export const signIn = ({ payload, redirect }) => async (dispatch) => {
    const { email, password } = payload;
    dispatch(authRequested());
    try {
        const data = await authService.login({ email, password });
        dispatch(authRequestedSuccess({ userId: data.localId }));
        localStorageService.setTokens(data);
        history.push(redirect);
    } catch (error) {
        const { code, message } = error.response.data.error;
        if (code === 400) {
            const errorMessage = generateAuthError(message);
            dispatch(authRequestedFailed(errorMessage));
        } else {
            dispatch(authRequestedFailed(error.message));
        }
    }
};
export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userLoggedOut());
    history.push("/");
};
const createUser = (payload) => async (dispatch) => {
    dispatch(userCreateRequested());
    try {
        const { content } = await userService.create(payload);
        dispatch(userCreated(content));
        history.push("/");
    } catch (error) {
        dispatch(userCreateFailed(error.message));
    };
};

export const signUp = ({ email, password, ...rest }) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const data = await authService.register({ email, password });
        localStorageService.setTokens(data);
        dispatch(authRequestedSuccess({ userId: data.localId }));
        dispatch(createUser({
            _id: data.localId,
            email,
            image: `https://avatars.dicebear.com/api/avataaars/${(
                Math.random() + 1
            )
                .toString(36)
                .substring(7)}.svg`,
            ...rest
        }));
    } catch (error) {
        dispatch(authRequestedFailed(error.message));
    }
};
export const getUsersList = () => (state) => state.users.entities;
export const loadUsersList = () => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const { content } = await userService.get();
        dispatch(usersRecived(content));
    } catch (error) {
        dispatch(usersRequestFailed(error.message));
    }
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getAuthError = () => (state) => state.users.error;
export const getDataStatus = () => state => state.users.dataLoaded;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getCurrentUserData = () => (state) => state.users.entities ? state.users.entities.find(u => u._id === state.users.auth.userId) : null;
export default usersReducer;
