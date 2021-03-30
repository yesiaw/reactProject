import { createSelector } from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getUsersSelector = createSelector(getUsers , (users) => {
    return users.filter(u => true)

})
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const gettotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getcurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getisFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.FollowingInProgress;
}

