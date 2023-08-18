const ADD_POST = 'ADD-POST';
const UPDETE_NEW_POST_TEXT = 'UPDETE-NEW-POST-TEXT';
let initialState = {
    posts: [
        { id: 1, message: 'Hi , how are you?', likeCount: 13 },
        { id: 2, message: 'Hi , Govgvjhd', likeCount: 7 },
        { id: 3, message: 'bla bla bla ', likeCount: 12 },
        { id: 4, message: 'Da da da ', likeCount: 1 },
    ],
    newPostText: 'Hello DanyA'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let i = 5;
            let newPost = {
                id: i++,
                message: state.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDETE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        default:
            return state;

    }
}


export const addPostActionCreator = () => ({ type: ADD_POST });
export const updeteNewPostTextActionCreator = (text) =>
    ({ type: UPDETE_NEW_POST_TEXT, newText: text });

export default profileReducer;