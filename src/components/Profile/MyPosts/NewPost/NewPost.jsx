import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
	
	let newPostElement = React.createRef();
	
	let addPost = () => {
		props.dispatch({ type: 'ADD-POST' });
	}
	
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
	}
	
	return (
		<div className={s.newPostContainer}>
			<div className={s.cardHeader}>New post</div>
			<div className={s.cardBody}>
				<img src='https://images.unsplash.com/photo-1496070242169-b672c576566b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=641&q=80' />
				<textarea onChange={ onPostChange } ref={newPostElement} 
						 value={props.newPostText} placeholder='Write something here...' />
				<button className='postButton' onClick={ addPost }>Post</button>
			</div>
		</div>
	)
}

export default NewPost;