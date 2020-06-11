import React from 'react';
import s from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import NewPostContainer from './NewPost/NewPostContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
	return (
		<div>
			<div className={s.container}>
				<ProfileHeader />
				<div className={s.postsContainer}>
					<NewPostContainer store = {props.store} />		
					<hr></hr>
					<MyPostsContainer store = {props.store} profilePage={props.profilePage} />
				</div>
			</div>
		</div>
	)
}

export default Profile;