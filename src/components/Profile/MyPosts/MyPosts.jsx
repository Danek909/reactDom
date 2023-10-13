import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLenghtCreator, required } from '../../../utils/validators';
import { TexArea } from '../../Dialogs/common/FormsControl';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export const MaxLenght10 = maxLenghtCreator(10);

const AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field name="newPostText" component={TexArea} placeholder={"Post message"}
      validate={[required, MaxLenght10]} />
    </div>
    <div>
      <button className={s.buttonMyPosts}>Add post</button>
    </div>
  </form>;
}

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

const MyPosts = (props) => {
  console.log(props)
  let postsElements = props.posts.map(p => <Post key={'post' + p.id} message={p.message} likeCount={p.likeCount} />)

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.NewPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3 className={s.titleMyPosts}>My post</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;