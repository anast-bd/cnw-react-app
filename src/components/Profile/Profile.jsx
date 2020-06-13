import React from 'react';
import s from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import NewPostContainer from './NewPost/NewPostContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
	return (
		<div>
			<div className={s.container}>
				<ProfileHeader />
				<div className={s.postsContainer}>
					<NewPostContainer />		
					<hr></hr>
					<MyPostsContainer />
				</div>
			</div>
		</div>
	)
}

export default Profile;