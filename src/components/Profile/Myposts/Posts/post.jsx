import React from 'react';
import './post.css';
const Post = (props) => {
    return (
        <div className='post_container'>
            <div className='post_image'>

            </div>
            <div className='post_text'>
            {props.message} 
            
            </div>
        </div>
    )

}
export default Post;