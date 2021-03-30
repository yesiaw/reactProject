import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea, HocControls } from '../../common/preloader/FormsControl/formsControl';
import { maxSymbols, required } from '../../validators/validators';
import './Myposts.css';
import Post from './Posts/post';

let maxSymbolsv = maxSymbols(10)


const PostForm = (props) => {

  let keyDown = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      props.handleSubmit();

    }
  }

  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <Field component={HocControls} name={'postsText'} placeholder={'postText'} onKeyPress = {keyDown} validate={[required, maxSymbolsv]} nameComponent = {'textarea'} />
        <button>POST</button>
      </form>
    </>
  )
}

const PostReduxForm = reduxForm(  {
  form: 'post'
})(PostForm)

const MyPosts = (props) => {

  


  

  let onaddPost = (formData) => {
    props.addPost(formData.postsText)
    formData.postsText = ''

  }

  let posts = props.postData.map((post) => {
    return <Post message={post.message} />
  })
  return (
    <>
      <div className="my_posts">
        <div className="name_posts">
          MY POSTS

          </div>
      </div>

      <PostReduxForm onSubmit={onaddPost}  />
      {posts}
    </>
  )
}

export default MyPosts


