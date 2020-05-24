import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
	return (
		<div className={s.content}>
			<div className={s.container}>
				<div>
					<div className={s.profileHeader}>
						<div className={s.profileCover}></div>
						<div className={s.profileInfo}>
							<img className={s.profilePhoto} src='https://images.unsplash.com/photo-1496070242169-b672c576566b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=641&q=80'/>
							<div className={s.profileName}>
								Ribbit Ribbit
							</div>
						</div>
					</div>
				</div>

				<MyPosts />
			</div>
		</div>
	)
}

export default Profile;