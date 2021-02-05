import React from 'react'
import M from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
        { id: 1, text: 'Hi, how are you?' },
        { id: 2, text: 'It is my post' },
        { id: 3, text: 'I am a dracula' },
        { id: 4, text: 'Yo' },
        { id: 5, text: 'No , I am a drakula' },
    ]
   
    
    let postsElements = postsData.map(post => <Post message={post.text} />);
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