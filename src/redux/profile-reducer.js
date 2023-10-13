import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi , how are you?', likeCount: 13 },
        { id: 2, message: 'Hi , Govgvjhd', likeCount: 7 },
        { id: 3, message: 'bla bla bla ', likeCount: 12 },
        { id: 4, message: 'Da da da ', likeCount: 1 },
    ],
    profile: true,
    status: " ",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let i = 5;
            let newPost = {
                id: i++,
                message: action.NewPostText,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
    
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile,
            }
        }

        case SET_STATUS: {
            return {
                ...state, 
                status: action.status,
            }
        }
        
        default:
            return state;

    }
}


export const addPostActionCreator = (NewPostText) => ({ type: ADD_POST, NewPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) =>{
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
      });
};

export const getStatus = (userId) => (dispatch) =>{
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
      });
};

export const updeteStatus = (status) => (dispatch) =>{
    profileAPI.updeteStatus(status)
        .then(response => {
            if (response.data.resultCode === 0){ 
                dispatch(setStatus(status));
            }
      });
};
export default profileReducer;