import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updeteNewPostTextActionCreator } from '../../../redux/profile-reducer';
import store from '../../../redux/store';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatcToProps = (dispatch) => {
  return {
    updeteNewPostText: (text) => {
      let action = updeteNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost:  () => {
      dispatch(addPostActionCreator());
    }

  }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatcToProps)(MyPosts);

export default MyPostsContainer;