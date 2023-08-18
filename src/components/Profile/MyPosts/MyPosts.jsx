import React from 'react';
import { addPostActionCreator, updeteNewPostTextActionCreator } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  console.log(props)
  let postsElements = props.posts.map(p => <Post key={'post' + p.id} message={p.message} likeCount={p.likeCount} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updeteNewPostText(text);
  }


  return (
    <div className={s.postsBlock}>
      <h3 className={s.titleMyPosts}>My post</h3>
      <div>
        <div className={s.divMyPostsTexarea}>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button className={s.buttonMyPosts} onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;