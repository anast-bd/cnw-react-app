import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	
	let postsElements = props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount}/>)
	
	return (
		<div className={s.posts}>
			{ postsElements }
		</div>
	)
}

export default MyPosts;