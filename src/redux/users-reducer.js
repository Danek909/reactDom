import { useCallback } from "react";
import { userAPI } from "../api/api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE ';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [2, 3],

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }


        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOOGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }

        }
        case TOOGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }


        default:
            return state;

    }
}

export const FollowSuccess = (userId) => ({ type: FOLLOW, userId });
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });






export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        });

    }
}


export const follow = (UserId) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, UserId));
        userAPI.follow(UserId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(FollowSuccess(UserId));
                }
                dispatch(toggleFollowingProgress(false, UserId));
            });
    }
}


export const unfollow = (UserId) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, UserId));
        userAPI.unfollow(UserId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unFollowSuccess(UserId));
                }
                dispatch(toggleFollowingProgress(false, UserId));
            });
    }
}


export default usersReducer;