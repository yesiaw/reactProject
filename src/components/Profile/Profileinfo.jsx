import React from 'react';
import Preloader from '../common/preloader/preloader';
import '../Profile/profile.css'
import ProfileStatus from './ProfileStatus';


let Profileinfo = (props) => {

  if (!props.profile) {
    return (
      <Preloader />
    )
  }

  return (
    <div className="profile">
      <div className="profile_image">
        <img src={props.profile.photos.small} />
        </div>
      <div className="profile_info">
        <div className="profile_name">
          {props.profile.fullName}
          </div>
        <div className="profile_other_info">
          {props.profile.aboutMe}
          </div>
          <ProfileStatus status = {props.status} updateStatus = {props.updateStatus} />
      </div>


    </div>
  )

}

export default Profileinfo;