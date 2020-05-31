import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

const MyPosts = (props) => {
	
	let postsElements = props.profilePage.posts.map ( p => <Post message={p.message} likesCount={p.likesCount}/>)
	
	return (
		<div className={s.postsContainer}>
			<NewPost newPostText={props.profilePage.newPostText} 
					addPost={props.addPost}
					updateNewPostText={props.updateNewPostText}
			/>			
			<hr></hr>	
			<div className={s.posts}>
				{ postsElements }
			</div>
		</div>
	)
}

export default MyPosts;