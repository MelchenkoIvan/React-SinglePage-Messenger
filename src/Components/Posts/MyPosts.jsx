import React from 'react'
import M from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text }); 

    }
    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }
    

    let postsElements = props.profilePage.postsData.map(post => <Post message={post.text} countLike={post.countLike} />);
    return (
        <div className={M.posts}>
            <h3 className={ M.titlePosts}>My Posts</h3>
            <div>
                <textarea ref={newPostElement} value={props.profilePage.newPostText} onChange={onPostChange} />
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                
            </div>
            <div className={M.posts}>
                {postsElements}
            </div>
        </div>)
}
export default MyPosts;