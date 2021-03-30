import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default: return state;
    }

}

export const setUserData = (email, userId, login, isAuth) => ({ type: SET_USER_DATA, data: { email, userId, login, isAuth } })

export const setAuthMe = () => {
    return (dispatch) => {
       return authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let { email, id, login } = data.data
                dispatch(setUserData(email, id, login, true))
            }
        })
    }
    
    
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthMe())
            } else {
                let summaryError = response.data.messages
                dispatch(stopSubmit("login", { _error: summaryError[0] }))
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
    }
}



export default authReducer;

