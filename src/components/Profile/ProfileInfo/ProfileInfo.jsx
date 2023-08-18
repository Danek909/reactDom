import React from 'react';
import s from'./ProfileInfo.module.css';


const Profileinfo = () =>{
    return (
      <div>
        <div>
            <img className={s.imgProfile} src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt='Deletet' />
        </div>
        <div className={s.descriptionBlock}>
          Ava + Description
        </div>
     </div>
)}

export default Profileinfo;