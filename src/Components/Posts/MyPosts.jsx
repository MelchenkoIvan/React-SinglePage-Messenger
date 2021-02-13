import React from 'react'
import M from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = 
        props.post.map(post => <Post message={post.text} countLike={post.countLike} />);


    let newPostElement = React.createRef();
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);


    }
    let onAddPost = () => {
        props.addPost();

    }


    
    return (
        <div className={M.posts}>
            <h3 className={M.titlePosts}>My Posts</h3>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div className={M.posts}>
                {postsElements}
            </div>
        </div>)
}
export default MyPosts;