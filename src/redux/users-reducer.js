import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURENT_PAGE = 'SETCURENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_FOLLOW = 'TOOGLE_FOLLOW'

let initialState = {
    users: [
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    FollowingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })


            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOOGLE_FOLLOW:
            return {
                ...state,
                FollowingInProgress: action.isFetching
                    ? [...state.FollowingInProgress, action.userID]
                    : state.FollowingInProgress.filter(id => id != action.userID)
            }
        default: return state;
    }

}

export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const setIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching })
export const toogleFollow = (isFetching, userID) => ({ type: TOOGLE_FOLLOW, isFetching, userID })

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(setCurrentPage(currentPage))
        })
    }
}

export const FollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toogleFollow(true, id))
        usersAPI.setFollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(toogleFollow(false, id))
        });
    }
}
export const UnFollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toogleFollow(true, id))
        usersAPI.setUnFollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(id))
            }
            dispatch(toogleFollow(false, id))
        });
    }
}

export default usersReducer;