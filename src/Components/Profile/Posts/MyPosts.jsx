import { render } from '@testing-library/react';
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../../utils/Validators/Validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';
import M from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = React.memo(props => {
    //говорим когда прерисовать а когда нет 
    //либо можем унаследовать PureComponent и результат тот же
    // shouldComponentUpdate(nextProps, nextState){
    //     return nextProps != this.props || nextState != this.state;
    // }

    //можем использовать memo если не хотим класовую компоненту
    let postsElements =
        props.post.map(post => <Post message={post.text} countLike={post.countLike} />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };
    return (
        <div className={M.posts}>
            <h3 className={M.titlePosts}>My Posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={M.posts}>
                {postsElements}
            </div>
        </div>)
})

const maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit /* handleSubmit собирает данные из Field*/}>
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder="Enter your post"
                    validate={[requiredField, maxLength10]} />
            </div>
            <div>
                <button >Add post</button>
            </div>

        </form>
    )
}
const AddNewPostFormRedux = reduxForm({ form: "NewPostFormRedux" })(AddNewPostForm)

export default MyPosts;