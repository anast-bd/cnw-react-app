import React from 'react';
import s from './NewPost.module.css';

const NewPost = () => {
	return (
		<div className={s.newPostContainer}>
			<div className={s.cardHeader}>New post</div>
			<div className={s.cardBody}>
				<img src='https://images.unsplash.com/photo-1496070242169-b672c576566b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=641&q=80' />
				<input placeholder='Write something here...'>
				</input>
			</div>
		</div>
	)
}

export default NewPost;