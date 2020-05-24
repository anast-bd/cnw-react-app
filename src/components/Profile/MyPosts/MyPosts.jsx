import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={s.postsContainer}>
				
			<div className={s.newPostContainer}>
				<div className={s.cardHeader}>New post</div>
				<div className={s.cardBody}>
					<img src='https://images.unsplash.com/photo-1496070242169-b672c576566b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=641&q=80' />
					<input placeholder='Write something here...'>
					</input>
				</div>
			</div>
			
			<hr></hr>
				
			<div className={s.posts}>
				
				<Post message='Ribbit! Ribbit ribbit.' likeCount='800'/>
				<Post message='Ribbit ribbit, ribbit. Ribbit?' likeCount='1250'/>
				<Post message='Ribbit ribbit rib-ribbit ribbit!' likeCount='958'/>


			</div>
		</div>
	)
}

export default MyPosts;