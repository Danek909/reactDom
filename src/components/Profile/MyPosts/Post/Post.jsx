import React from 'react';
import s from './Posts.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://media.tenor.com/zFmI-Uimgm0AAAAi/bean-mister-bean.gif" alt='deletet' />
      {props.message}
      <div>
        <span className={s.spanPost}>Like 10</span>
      </div>
    </div>
  )
}

export default Post;