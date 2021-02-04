import React from 'react'
import M from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div className={M.MainPost}>
                <img id={M.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJ774VL7RjYJGKgiFM2E1DmvLT3NeldlBWA&usqp=CAU" />
                <div className={M.data}>
                    <h3>Dmitry K.</h3>
                    <p>
                        Date of Birth:2january<br />
                                City: Minsk<br />
                                Edication:BSU'11<br />
                                Web Site:adsdasdad<br />
                    </p>
                </div>
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={M.posts}>
                <Post message="Hi, how are you?"/>
                <Post message="It is my post"/>
            </div>
        </div>)
}
export default MyPosts;