import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea, HocControls } from '../../common/preloader/FormsControl/formsControl';
import { maxSymbols, required } from '../../validators/validators';
import './Myposts.css';
import Post from './Posts/post';

let maxSymbolsv = maxSymbols(10)


const PostForm = (props) => {

  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <Field component={HocControls} name={'postsText'} placeholder={'postText'} validate={[required, maxSymbolsv]} nameComponent = {'textarea'} />
        <button>POST</button>
      </form>
    </>
  )
}

const PostReduxForm = reduxForm({
  form: 'post'
})(PostForm)

const MyPosts = (props) => {

  let keyDown = (event) => {
    if (event.key === 'Enter') {
      onaddPost(event.currentTarget.value)
      event.preventDefault();
    } else if (event.ctrlKey === true) {
      props.PostChange(props.newPostText + '\n')
    }
  }

  let onaddPost = (formData) => {
    if (typeof formData == 'object') {
      props.addPost(formData.postsText)
      formData.postsText = ''
    }else {
      props.addPost(formData)
    }

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

      <PostReduxForm onSubmit={onaddPost} keyDown={keyDown} />
      {posts}
    </>
  )
}

export default MyPosts




// const MyPosts = (props) => {

//   let setPostText = (formData) =>{
//     console.log(formData)
//   }

  // let posts = props.postData.map((post) => {
  //   return <Post message={post.message} />
  // })

//   let onaddPost = () => {
//     props.addPost();
//   }

//   let onPostChange = (e) => {
//     let text = e.target.value;
//     props.PostChange(text);
//   }

//   let keyDown = (event) => {
//     if (event.key === 'Enter') {
//       onaddPost();
//       event.preventDefault();
//     } else if (event.ctrlKey === true) {
//       props.PostChange(props.newPostText + '\n')
//     }
//   }

//   let changeNumber = () => {
//     let number = props.likeNumber;
//     props.changeNumber(number);
//   }

  // return (
  //   <div className="my_posts">
  //     <div className="name_posts">
  //       MY POSTS

  //         </div>
  //     {/* <textarea white-space='nowrap' value={props.newPostText} onChange={onPostChange} onKeyPress={(e) => { keyDown(e) }} className="posts_text" /> */}
  //     <PostReduxForm onSubmit = {setPostText}/>
  //     {/* <button onClick={onaddPost} className="send_post">
  //       post
  //     </button> */}
  //     {posts}
  //     <button className='send_post' onClick={changeNumber}>{props.likeNumber}</button>
  //   </div>


//   )
// }
// export default MyPosts;


