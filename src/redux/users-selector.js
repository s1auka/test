export const getUsersSelector = (state) => {
    return state.usersInfo.users;
}

export const getTotalUsersCount = (state) => {
    return state.usersInfo.totalCount;
}

export const getCurrentPage = (state) => {
    return state.usersInfo.currentPage;
}

export const checkIsFetching = (state) => {
    return state.usersInfo.isFetching;
}

export const followingInProgressStatus = (state) => {
    return state.usersInfo.followingInProgress;
}
