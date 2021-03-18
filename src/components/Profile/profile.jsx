import React from 'react';
import MyPostsContainer from './Myposts/Myposts-container';
import Profileinfo from './Profileinfo';





const Profile = (props) => {
    return (

        <>
            <Profileinfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            
            <MyPostsContainer />

        </>
    )
}

export default Profile;