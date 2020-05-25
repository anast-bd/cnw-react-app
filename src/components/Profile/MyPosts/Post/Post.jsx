import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src='https://images.unsplash.com/photo-1496070242169-b672c576566b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=641&q=80' />
			<div className={s.postText}>
				{props.message} 
			</div>
			<div>
				{props.likesCount}
				<span> likes</span>
			</div>
		</div>
	)
}

export default Post;