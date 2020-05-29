import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
	
	let newPostElement = React.createRef();
	
	let addPost = () => {
		let postMessage = newPostElement.current.value;
		props.addPost(postMessage);
		newPostElement.current.value = '';
	}
	
	return (
		<div className={s.newPostContainer}>
			<div className={s.cardHeader}>New post</div>
			<div className={s.cardBody}>
				<img src='https://images.unsplash.com/photo-1496070242169-b672c576566b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=641&q=80' />
				<input ref={newPostElement} placeholder='Write something here...'>
				</input>
				<button className='postButton' onClick={ addPost }>Post</button>
			</div>
		</div>
	)
}

export default NewPost;