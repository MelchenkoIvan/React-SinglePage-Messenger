import React from 'react'
import M from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    

    let postsElements = props.postsData.map(post => <Post message={post.text} countLike={post.countLike }/>);
    return (
        <div className={M.posts}>
            <h3 className={ M.titlePosts}>My Posts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
                
            </div>
            <div className={M.posts}>
                {postsElements}
            </div>
        </div>)
}
export default MyPosts;