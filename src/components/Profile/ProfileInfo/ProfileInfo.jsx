import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Dialogs/common/preloader';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader/>
  }

  return (
    <div>
      {/* <div>
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt='Deletet' />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos?.large || 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' } />
        Ava + Description
        <ProfileStatus status={props.status} updeteStatus={props.updeteStatus}/>
      </div>
    </div>
  )
}

export default ProfileInfo;