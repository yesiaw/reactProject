import { ProfileAPI, usersAPI } from "../api/api";

const ADD_POST = 'add-post';
const CHANGE_NUMBER = 'CHANGE_NUMBER';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

let initialState = {

    profile: null,
    postData: [
        { id: 1, message: 'Hi, what are you do?' },
        { id: 2, message: 'Hi, im die' },
    ],
    likeNumber: 1,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [...state.postData, { id: 5, message: action.message }]
            }
        case CHANGE_NUMBER:
            return {
                ...state,
                likeNumber: action.number + 1

            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile

            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status

            }
        case UPDATE_STATUS:
            return {
                ...state,
                status: action.status

            }

        default: return state;
    }

}

export const addPost = (message) => ({ type: ADD_POST, message })
export const changeNumber = (number) => ({ type: CHANGE_NUMBER, number })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })


export const renderProfile = (id) => {
    return (dispatch) => {
        usersAPI.getProfile(id).then(data => {
            dispatch(setUserProfile(data))
        })
        
    }
}
export const getStatus = (id) => {
    return (dispatch) => {
        ProfileAPI.getStatus(id).then(response => {
                dispatch(setStatus(response.data))
            
            
        })
        
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
            
        })   
    }
}





export default profileReducer;