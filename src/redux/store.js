import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi , how are you?', likeCount: 13 },
        { id: 2, message: 'Hi , Govgvjhd', likeCount: 7 },
        { id: 3, message: 'bla bla bla ', likeCount: 12 },
        { id: 4, message: 'Da da da ', likeCount: 1 },
      ],
      newPostText: 'Hello World'
    },

    dialogsPage: {
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is you it_kamasutra' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
      ],
      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Danya' },
        { id: 3, name: 'Andrey' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Sasha' },
        { id: 6, name: 'Viktor' },
      ],

      newMessageBody: ""

    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State change')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;