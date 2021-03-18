import React from 'react';
import { connect } from 'react-redux';
import { addPost, changeNumber } from '../../../redux/profile-reducer';
import MyPosts from './Myposts';
import './Myposts.css';


let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData
  }
}


const MyPostsContainer = connect(mapStateToProps, {
   addPost,changeNumber
})(MyPosts);
export default MyPostsContainer;


