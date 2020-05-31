import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileHeader from './ProfileHeader/ProfileHeader'

const Profile = (props) => {
	return (
		<div>
			<div className={s.container}>
				<ProfileHeader />
				<MyPosts profilePage={props.profilePage}
						addPost={props.addPost}
						updateNewPostText={props.updateNewPostText}/>
			</div>
		</div>
	)
}

export default Profile;