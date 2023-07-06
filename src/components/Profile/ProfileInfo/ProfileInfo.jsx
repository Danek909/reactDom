import React from 'react';
import s from'./ProfileInfo.module.css';


const Profileinfo = () =>{
    return (
      <div>
        <div>
            <img className={s.imgProfile} src="https://images.unsplash.com/photo-1619995745882-f4128ac82ad6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80" alt='Deletet' />
        </div>
        <div className={s.descriptionBlock}>
          Ava + Description
        </div>
     </div>
)}

export default Profileinfo;