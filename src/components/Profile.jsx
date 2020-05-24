import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
	return (
		<div className={s.content}>
			<div className={s.container}>
				<div>
					<div className={s.profileHeader}>
						<div className={s.profileCover}></div>
						<div className={s.profileInfo}></div>
					</div>
				</div>

				<div className={s.postsContainer}>
					<div className={s.posts}>
						<div className={s.newPostContainer}>
							<div className={s.cardHeader}>New post</div>
							<div className={s.cardBody}>
								<input placeholder='Write something here...'>
								</input>
							</div>
						</div>
						<div className={s.item}>
							Post 1
						</div>
						<div className={s.item}>
							Post 2
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile;