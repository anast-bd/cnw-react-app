import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileHeader from './ProfileHeader/ProfileHeader'

const Profile = (props) => {
	return (
		<div>
			<div className={s.container}>
				<ProfileHeader />
				<MyPosts posts={props.profilePage.posts} 
						newPostText={props.profilePage.newPostText} 
						updageNewPostText={props.updageNewPostText}
						addPost={props.addPost} />
			</div>
		</div>
	)
}

export default Profile;